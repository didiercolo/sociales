import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/client';

export default function AuthPromptModal({ open, onClose, onAuthenticated }) {
  const dialogRef = useRef(null);
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (open && !dlg.open) dlg.showModal();
    if (!open && dlg.open) dlg.close();
  }, [open]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const pseudoEmail = `${nickname.trim().toLowerCase().replace(/\s+/g, '_')}@eduportalcr.app`;
    const { error: signInError } = await supabase.auth.signInWithPassword({ email: pseudoEmail, password });
    setLoading(false);
    if (signInError) {
      setError('Nickname o contraseña incorrectos. ¡Inténtalo de nuevo!');
      return;
    }
    onAuthenticated();
  };

  // Close when the user clicks the backdrop (the dialog element itself, outside the card).
  const handleDialogClick = (e) => {
    if (e.target === dialogRef.current) onClose();
  };

  return (
    <dialog ref={dialogRef} className="auth-modal" onClose={onClose} onClick={handleDialogClick}>
      <div className="auth-modal-inner">
        <button type="button" className="auth-modal-close" aria-label="Cerrar" onClick={onClose}>✕</button>
        <div className="auth-header">
          <div className="auth-icon">🔒</div>
          <h2>Inicia sesión para ver la respuesta y ganar puntos</h2>
        </div>

        <form onSubmit={handleLogin} className="auth-form">
          <div className="form-group">
            <label htmlFor="modal-nickname">Nickname</label>
            <input
              id="modal-nickname"
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              autoComplete="username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="modal-password">Contraseña</label>
            <input
              id="modal-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          {error && <div className="auth-error">⚠️ {error}</div>}

          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? 'Ingresando...' : 'Ingresar y ver'}
          </button>
        </form>

        <p className="auth-footer" style={{ marginTop: '1rem' }}>
          ¿Nuevo?{' '}
          <button
            type="button"
            className="auth-link-btn"
            onClick={() => navigate('/registro?redirect=/pregunta-del-dia')}
          >
            Crear cuenta →
          </button>
        </p>
      </div>
    </dialog>
  );
}
