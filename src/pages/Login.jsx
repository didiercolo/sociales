import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export default function Login() {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
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
            await signInWithEmailAndPassword(auth, pseudoEmail, password);
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
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Tu contraseña..."
                            required
                            autoComplete="current-password"
                        />
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
