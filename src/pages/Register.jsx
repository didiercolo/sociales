import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDocs, updateDoc, collection, query, where } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import { seedNicknames } from '../scripts/seedNicknames';

const STEPS = {
    PICK_NICKNAME: 1,
    SET_PASSWORD: 2,
};

export default function Register() {
    const [step, setStep] = useState(STEPS.PICK_NICKNAME);
    const [nicknameMode, setNicknameMode] = useState('list'); // 'list' | 'custom'
    const [availableNicknames, setAvailableNicknames] = useState([]); // [{ emoji, name, docId }] loaded from Firestore
    // docIds now embedded in each availableNicknames entry
    const [loadingNicknames, setLoadingNicknames] = useState(true);
    const [selectedNickname, setSelectedNickname] = useState('');
    const [customNickname, setCustomNickname] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [nicknameError, setNicknameError] = useState(''); // Firestore load error
    const [loading, setLoading] = useState(false);
    const [honeypot, setHoneypot] = useState('');
    const navigate = useNavigate();

    // Load available (unused) nicknames from Firestore on mount
    useEffect(() => {
        const loadNicknames = async () => {
            try {
                // Seed collection if empty (first time setup)
                await seedNicknames();

                // Fetch only nicknames where used === false
                const q = query(collection(db, 'nicknames'), where('used', '==', false));
                const snapshot = await getDocs(q);

                const entries = [];
                snapshot.forEach((docSnap) => {
                    const { name, emoji } = docSnap.data();
                    entries.push({ name, emoji: emoji || '', docId: docSnap.id });
                });

                // Shuffle randomly so each kid sees a different order
                for (let i = entries.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [entries[i], entries[j]] = [entries[j], entries[i]];
                }
                setAvailableNicknames(entries);
            } catch (err) {
                console.error('Error loading nicknames from Firestore:', err);
                setNicknameError(
                    'No se pudo cargar la lista de nombres. Por favor, escribe tu propio nickname.'
                );
                // Auto-switch to custom mode if Firestore is unavailable
                setNicknameMode('custom');
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

    const handleNextStep = () => {
        setError('');
        if (activeNickname.length < 3) {
            return setError('¡Selecciona un nombre o escribe uno con al menos 3 caracteres!');
        }
        setStep(STEPS.SET_PASSWORD);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        if (honeypot) return;

        if (password.length < 6) {
            return setError('La contraseña debe tener al menos 6 caracteres.');
        }

        setLoading(true);
        try {
            // 1. Double-check nickname uniqueness (especially for custom nicknames)
            const nicknameQuery = query(
                collection(db, 'users'),
                where('nickname', '==', activeNickname)
            );
            const querySnapshot = await getDocs(nicknameQuery);
            if (!querySnapshot.empty) {
                setLoading(false);
                return setError('Ese nombre ya está tomado. ¡Elige otro!');
            }

            // 2. Create Firebase account using pseudo-email (never shown to user)
            const pseudoEmail = `${activeNickname.toLowerCase().replace(/\s+/g, '_')}@eduportalcr.app`;
            const userCredential = await createUserWithEmailAndPassword(auth, pseudoEmail, password);
            const user = userCredential.user;

            // 3. Create Firestore user document with default values
            await setDoc(doc(db, 'users', user.uid), {
                uid: user.uid,
                nickname: activeNickname,
                tier: 1,
                tierSubject: null,
                tierExpiresAt: null,
                score: 0,
                questionsToday: 0,
                lastQuestionDate: null,
                createdAt: new Date(),
            });

            // 4. If nickname came from predefined list, mark it as used in Firestore
            const pickedEntry = availableNicknames.find((e) => e.name === activeNickname);
            if (nicknameMode === 'list' && pickedEntry) {
                await updateDoc(doc(db, 'nicknames', pickedEntry.docId), {
                    used: true,
                });
            }

            navigate('/');
        } catch (err) {
            console.error(err);
            setError('Ocurrió un error al crear tu cuenta. Inténtalo de nuevo.');
        }
        setLoading(false);
    };

    return (
        <div className="auth-page">
            <div className="auth-card" style={{ maxWidth: step === STEPS.PICK_NICKNAME ? 620 : 480 }}>

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
                                onClick={() => setNicknameMode('list')}
                                type="button"
                            >
                                🎲 Elegir de la lista
                            </button>
                            <button
                                className={`mode-btn ${nicknameMode === 'custom' ? 'active' : ''}`}
                                onClick={() => setNicknameMode('custom')}
                                type="button"
                            >
                                ✏️ Escribir el mío
                            </button>
                        </div>

                        {/* List Mode */}
                        {nicknameMode === 'list' && (
                            <div className="nickname-list-section">
                                <p className="nickname-instruction">Si deseas selecciona un nickname o escoge uno propio</p>
                                {loadingNicknames ? (
                                    <div className="nickname-loading">Cargando nombres disponibles...</div>
                                ) : (
                                    <div className="nickname-grid">
                                        {availableNicknames.map((entry) => (
                                            <button
                                                key={entry.name}
                                                className={`nickname-chip ${selectedNickname === entry.name && nicknameMode === 'list' ? 'selected' : ''}`}
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

                        {/* Custom Mode */}
                        {nicknameMode === 'custom' && (
                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <label htmlFor="custom-nickname">Tu Nickname Personalizado</label>
                                <input
                                    id="custom-nickname"
                                    type="text"
                                    value={customNickname}
                                    onChange={(e) => setCustomNickname(e.target.value)}
                                    placeholder="Ej: NebulaByte, QuantumKitsune..."
                                    autoFocus
                                />
                            </div>
                        )}

                        {/* Preview */}
                        {activeNickname && (
                            <div className="nickname-preview">
                                Nickname seleccionado: <strong>👾 {activeNickname}</strong>
                            </div>
                        )}

                        {error && <div className="auth-error">⚠️ {error}</div>}

                        <button className="auth-btn" onClick={handleNextStep} style={{ marginTop: '1rem' }}>
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

                        <form onSubmit={handleRegister} className="auth-form">
                            {/* Honeypot */}
                            <input
                                type="text"
                                value={honeypot}
                                onChange={(e) => setHoneypot(e.target.value)}
                                style={{ display: 'none' }}
                                tabIndex="-1"
                                autoComplete="off"
                            />

                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Mínimo 6 caracteres"
                                    required
                                    autoComplete="new-password"
                                    autoFocus
                                />
                            </div>

                            {error && <div className="auth-error">⚠️ {error}</div>}

                            <button type="submit" className="auth-btn" disabled={loading}>
                                {loading ? 'Creando cuenta...' : '¡Crear mi cuenta! 🚀'}
                            </button>

                            <button
                                type="button"
                                className="auth-back-btn"
                                onClick={() => { setStep(STEPS.PICK_NICKNAME); setError(''); }}
                            >
                                ← Cambiar nickname
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
