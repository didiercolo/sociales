import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/client';

export default function Login() {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Reconstruct the pseudo-email from the nickname
            const pseudoEmail = `${nickname.trim().toLowerCase().replace(/\s+/g, '_')}@eduportalcr.app`;
            const { error: signInError } = await supabase.auth.signInWithPassword({ email: pseudoEmail, password });
            if (signInError) throw signInError;
            navigate('/');
        } catch (err) {
            console.error(err);
            setError('Nickname o contraseña incorrectos. ¡Inténtalo de nuevo!');
        }
        setLoading(false);
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-header">
                    <div className="auth-icon">⚡</div>
                    <h1>Iniciar Sesión</h1>
                    <p>Ingresa tu nickname y contraseña para continuar tu aventura.</p>
                </div>

                <form onSubmit={handleLogin} className="auth-form">
                    <div className="form-group">
                        <label htmlFor="nickname">Nombre de Usuario (Nickname)</label>
                        <input
                            id="nickname"
                            type="text"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            placeholder="Tu nickname..."
                            required
                            autoComplete="username"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Tu contraseña..."
                                required
                                autoComplete="current-password"
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
                        {loading ? 'Ingresando...' : 'Ingresar 🚀'}
                    </button>
                </form>

                <p className="auth-footer">
                    ¿No tienes cuenta?{' '}
                    <Link to="/registro">¡Regístrate gratis!</Link>
                </p>
            </div>
        </div>
    );
}
