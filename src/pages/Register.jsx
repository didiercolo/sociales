import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDocs, collection, query, where } from 'firebase/firestore';
import { auth, db } from '../firebase/config';

export default function Register() {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    // Honeypot field — bots will fill this; humans won't see it
    const [honeypot, setHoneypot] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');

        // Bot check: reject if honeypot is filled
        if (honeypot) return;

        if (nickname.trim().length < 3) {
            return setError('El nombre de usuario debe tener al menos 3 caracteres.');
        }
        if (password.length < 6) {
            return setError('La contraseña debe tener al menos 6 caracteres.');
        }

        setLoading(true);
        try {
            // 1. Check if nickname is already taken in Firestore
            const nicknameQuery = query(
                collection(db, 'users'),
                where('nickname', '==', nickname.trim())
            );
            const querySnapshot = await getDocs(nicknameQuery);

            if (!querySnapshot.empty) {
                setLoading(false);
                return setError('Ese nombre de usuario ya está tomado. ¡Elige otro!');
            }

            // 2. Create Firebase account using a pseudo-email (user never sees this)
            const pseudoEmail = `${nickname.trim().toLowerCase().replace(/\s+/g, '_')}@eduportalcr.app`;
            const userCredential = await createUserWithEmailAndPassword(auth, pseudoEmail, password);
            const user = userCredential.user;

            // 3. Create the user profile document in Firestore
            await setDoc(doc(db, 'users', user.uid), {
                uid: user.uid,
                nickname: nickname.trim(),
                tier: 1,
                tierSubject: null,
                tierExpiresAt: null,
                score: 0,
                questionsToday: 0,
                lastQuestionDate: null,
                createdAt: new Date(),
            });

            // 4. Redirect to home on success
            navigate('/');
        } catch (err) {
            console.error(err);
            setError('Ocurrió un error al crear tu cuenta. Inténtalo de nuevo.');
        }
        setLoading(false);
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-header">
                    <div className="auth-icon">🚀</div>
                    <h1>Crear Cuenta</h1>
                    <p>¡Elige tu nombre de guerrero y empieza a escalar el tablero!</p>
                </div>

                <form onSubmit={handleRegister} className="auth-form">
                    {/* Honeypot - hidden from humans */}
                    <input
                        type="text"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        style={{ display: 'none' }}
                        tabIndex="-1"
                        autoComplete="off"
                    />

                    <div className="form-group">
                        <label htmlFor="nickname">Nombre de Usuario (Nickname)</label>
                        <input
                            id="nickname"
                            type="text"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            placeholder="Ej: NebulaByte, QuantumKitsune..."
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
                            placeholder="Mínimo 6 caracteres"
                            required
                            autoComplete="new-password"
                        />
                    </div>

                    {error && <div className="auth-error">⚠️ {error}</div>}

                    <button type="submit" className="auth-btn" disabled={loading}>
                        {loading ? 'Creando cuenta...' : '¡Crear mi cuenta! 🎮'}
                    </button>
                </form>

                <p className="auth-footer">
                    ¿Ya tienes cuenta?{' '}
                    <Link to="/login">Inicia sesión aquí</Link>
                </p>
            </div>
        </div>
    );
}
