import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '../supabase/client';
import { useAuth } from '../context/AuthContext';
import { NICKNAMES_SEED } from '../scripts/seedNicknames';

const STEPS = {
    PICK_NICKNAME: 1,
    SET_PASSWORD: 2,
};

export default function Register() {
    const [step, setStep] = useState(STEPS.PICK_NICKNAME);
    const [nicknameMode, setNicknameMode] = useState('list'); // 'list' | 'custom'
    const [availableNicknames, setAvailableNicknames] = useState([]); // [{ emoji, name, docId }] loaded from Firestore
    const [loadingNicknames, setLoadingNicknames] = useState(true);
    const [selectedNickname, setSelectedNickname] = useState('');
    const [customNickname, setCustomNickname] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [nicknameError, setNicknameError] = useState(''); // Firestore load error
    const [loading, setLoading] = useState(false);
    const [honeypot, setHoneypot] = useState('');
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { refreshProfile } = useAuth();

    // Load available (unused) nicknames from Firestore on mount
    useEffect(() => {
        const shuffle = (arr) => {
            const a = [...arr];
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        };

        const loadNicknames = async () => {
            try {
                const { data, error } = await supabase
                    .from('nicknames')
                    .select('id, name, emoji')
                    .eq('used', false);
                if (error) throw error;

                if (data && data.length > 0) {
                    const entries = data.map(({ name, emoji, id }) => ({ name, emoji: emoji || '', docId: id }));
                    setAvailableNicknames(shuffle(entries));
                } else {
                    // Firestore nicknames collection not seeded yet — use hardcoded list
                    setAvailableNicknames(
                        shuffle(NICKNAMES_SEED.map(({ name, emoji }) => ({ name, emoji, docId: null })))
                    );
                }
            } catch (err) {
                console.error('Error loading nicknames from Supabase:', err);
                // Fall back to full hardcoded list on any error
                setAvailableNicknames(
                    shuffle(NICKNAMES_SEED.map(({ name, emoji }) => ({ name, emoji, docId: null })))
                );
            } finally {
                setLoadingNicknames(false);
            }
        };

        loadNicknames();
    }, []);

    const activeNickname = nicknameMode === 'custom' ? customNickname.trim() : selectedNickname;

    const handleSelectNickname = (name) => {
        setSelectedNickname(name); // only the plain name, no emoji
        setNicknameMode('list');
        setError('');
    };

    const handleNextStep = (e) => {
        if (e) e.preventDefault();
        setError('');
        if (activeNickname.length < 3) {
            return setError('¡Selecciona un nombre o escribe uno con al menos 3 caracteres!');
        }
        setStep(STEPS.SET_PASSWORD);
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        if (step === STEPS.PICK_NICKNAME) {
            handleNextStep(e);
        } else {
            await handleRegister(e);
        }
    };

    const handleRegister = async (e) => {
        if (e) e.preventDefault();
        setError('');
        if (honeypot) return;

        if (password.length < 6) {
            return setError('La contraseña debe tener al menos 6 caracteres.');
        }

        setLoading(true);
        try {
            // Create Supabase account using pseudo-email (never shown to user).
            // A taken nickname surfaces as a sign-up error or a unique-violation on the profile.
            const pseudoEmail = `${activeNickname.toLowerCase().replace(/\s+/g, '_')}@eduportalcr.app`;
            const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
                email: pseudoEmail,
                password,
            });
            if (signUpError) {
                if (/already|registered|exist/i.test(signUpError.message)) {
                    setError('Ese nombre ya está tomado. ¡Elige otro!');
                } else {
                    setError('Ocurrió un error al crear tu cuenta. Inténtalo de nuevo.');
                }
                setLoading(false);
                return;
            }

            const user = signUpData.user;

            // Create the profile row with default values (RLS enforces tier/score/questions_today).
            const { error: profileError } = await supabase.from('profiles').insert({
                id: user.id,
                nickname: activeNickname,
                tier: 1,
                score: 0,
                questions_today: 0,
            });
            if (profileError) {
                if (profileError.code === '23505') {
                    setError('Ese nombre ya está tomado. ¡Elige otro!');
                } else {
                    setError('Ocurrió un error al crear tu cuenta. Inténtalo de nuevo.');
                }
                setLoading(false);
                return;
            }

            // If nickname came from a Supabase-backed entry, mark it as used.
            const pickedEntry = availableNicknames.find((e) => e.name === activeNickname);
            if (nicknameMode === 'list' && pickedEntry?.docId) {
                await supabase.from('nicknames').update({ used: true }).eq('id', pickedEntry.docId);
            }

            // Profile row now exists — refresh context so the UI shows the
            // logged-in state immediately (signUp already created the session).
            await refreshProfile();

            navigate(searchParams.get('redirect') || '/');
        } catch (err) {
            console.error(err);
            setError('Ocurrió un error al crear tu cuenta. Inténtalo de nuevo.');
            setLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-card" style={{ maxWidth: step === STEPS.PICK_NICKNAME ? 620 : 480 }}>
                <form onSubmit={handleSubmitForm} className="auth-form">
                    {/* Honeypot */}
                    <input
                        type="text"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        style={{ display: 'none' }}
                        tabIndex="-1"
                        autoComplete="off"
                    />

                    {/* Step 1: Pick a Nickname */}
                    {step === STEPS.PICK_NICKNAME && (
                        <>
                            <div className="auth-header">
                                <div className="auth-icon">🎮</div>
                                <h1>Elige tu Nombre</h1>
                                <p>Selecciona uno de la lista o escribe el tuyo propio.</p>
                            </div>

                            {/* Mode Toggle */}
                            <div className="nickname-mode-toggle">
                                <button
                                    className={`mode-btn ${nicknameMode === 'list' ? 'active' : ''}`}
                                    onClick={() => {
                                        setNicknameMode('list');
                                        setError('');
                                    }}
                                    type="button"
                                >
                                    🎲 Elegir de la lista
                                </button>
                                <button
                                    className={`mode-btn ${nicknameMode === 'custom' ? 'active' : ''}`}
                                    onClick={() => {
                                        setNicknameMode('custom');
                                        setError('');
                                    }}
                                    type="button"
                                >
                                    ✏️ Escribir el mío
                                </button>
                            </div>

                            {/* Combined Nickname Input Field for Autofill */}
                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <label htmlFor="username">
                                    {nicknameMode === 'custom' ? 'Tu Nickname Personalizado' : 'Nombre Elegido'}
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    value={activeNickname}
                                    readOnly={nicknameMode === 'list'}
                                    onChange={(e) => {
                                        if (nicknameMode === 'custom') setCustomNickname(e.target.value);
                                    }}
                                    placeholder={nicknameMode === 'custom' ? "Ej: NebulaByte, QuantumKitsune..." : "Selecciona de la lista de abajo 👇"}
                                    required
                                    autoComplete="username"
                                    style={{
                                        cursor: nicknameMode === 'list' ? 'default' : 'text',
                                        backgroundColor: nicknameMode === 'list' ? '#E2E8F0' : '#F8FAFC'
                                    }}
                                    autoFocus
                                />
                            </div>

                            {/* List Mode Option Grid */}
                            {nicknameMode === 'list' && (
                                <div className="nickname-list-section">
                                    <p className="nickname-instruction">
                                        {nicknameError || 'Haz clic en el nombre que más te guste para seleccionarlo:'}
                                    </p>
                                    {loadingNicknames ? (
                                        <div className="nickname-loading">Cargando nombres disponibles...</div>
                                    ) : (
                                        <div className="nickname-grid">
                                            {availableNicknames.map((entry) => (
                                                <button
                                                    key={entry.name}
                                                    className={`nickname-chip ${selectedNickname === entry.name ? 'selected' : ''}`}
                                                    onClick={() => handleSelectNickname(entry.name)}
                                                    type="button"
                                                >
                                                    {entry.emoji} {entry.name}
                                                </button>
                                            ))}
                                            {availableNicknames.length === 0 && !loadingNicknames && (
                                                <p className="no-results">
                                                    ¡Todos los nombres están tomados! Escribe el tuyo.
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}

                            {error && <div className="auth-error">⚠️ {error}</div>}

                            <button type="submit" className="auth-btn" style={{ marginTop: '1rem' }}>
                                Continuar →
                            </button>

                            <p className="auth-footer">
                                ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
                            </p>
                        </>
                    )}

                    {/* Step 2: Set Password */}
                    {step === STEPS.SET_PASSWORD && (
                        <>
                            <div className="auth-header">
                                <div className="auth-icon">🔐</div>
                                <h1>Crea tu Contraseña</h1>
                                <p>
                                    Jugando como: <strong style={{ color: 'var(--primary-dark)' }}>👾 {activeNickname}</strong>
                                </p>
                            </div>

                            {/* Keep username in the DOM so browser password manager links it correctly with password */}
                            <input
                                type="hidden"
                                name="username"
                                value={activeNickname}
                                autoComplete="username"
                            />

                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Mínimo 6 caracteres"
                                        required
                                        autoComplete="new-password"
                                        autoFocus
                                        style={{ width: '100%', paddingRight: '3.5rem' }}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        style={{
                                            position: 'absolute',
                                            right: '12px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontSize: '1.25rem',
                                            padding: '4px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--text-muted)'
                                        }}
                                    >
                                        {showPassword ? '👁️' : '🙈'}
                                    </button>
                                </div>
                            </div>

                            {error && <div className="auth-error">⚠️ {error}</div>}

                            <button type="submit" className="auth-btn" disabled={loading}>
                                {loading ? 'Creando cuenta...' : '¡Crear mi cuenta! 🚀'}
                            </button>

                            <button
                                type="button"
                                className="auth-back-btn"
                                onClick={() => {
                                    setStep(STEPS.PICK_NICKNAME);
                                    setError('');
                                }}
                            >
                                ← Cambiar nickname
                            </button>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
}
