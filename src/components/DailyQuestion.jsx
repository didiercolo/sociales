import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { auth, db } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import '../index.css';

const DailyQuestion = () => {
  const [user, setUser] = useState(null);
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Get current date string in YYYY-MM-DD format
  const getTodayString = () => {
    return new Date().toISOString().split("T")[0];
  };

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchDailyQuestion();
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  const fetchDailyQuestion = async () => {
    setLoading(true);
    setError(null);
    try {
      const todayStr = getTodayString();
      const qRef = doc(db, 'dailyQuestions', todayStr);
      const qSnap = await getDoc(qRef);

      if (qSnap.exists()) {
        const data = qSnap.data();
        setQuestion({ id: qSnap.id, ...data });
      } else {
        setQuestion(null);
      }
    } catch (err) {
      console.error("Error fetching daily question:", err);
      // Fallback or handle error
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!selectedOption || !user) return;
    
    setIsSubmitting(true);
    setError(null);
    try {
      const functions = getFunctions();
      const submitAnswerCall = httpsCallable(functions, 'submitAnswer');
      
      const response = await submitAnswerCall({
        questionId: question.id,
        answer: selectedOption
      });

      setResult(response.data);
    } catch (err) {
      console.error("Error submitting answer:", err);
      // Firebase functions errors have a message
      setError(err.message || "Ocurrió un error al enviar la respuesta.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // If user is not logged in, we do not render the daily question
  // Alternatively, we could show a "Inicia sesión para jugar" banner
  if (!user && !loading) {
    return (
      <div className="daily-question-container" style={{
        background: 'linear-gradient(135deg, var(--bg-dark) 0%, var(--primary) 100%)',
        borderRadius: 'var(--radius-md)',
        padding: '2.5rem',
        color: 'white',
        textAlign: 'center',
        marginTop: '2rem',
        border: 'none',
        boxShadow: '0 4px 16px rgba(99,102,241,0.20)'
      }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: '800' }}>✨ Pregunta del Día ✨</h2>
        <p style={{ marginTop: '1rem', fontSize: '1.2rem', marginBottom: '2rem', fontWeight: '600' }}>
          Inicia sesión para participar, ganar puntos y subir en el marcador.
        </p>
      </div>
    );
  }

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '2rem', fontWeight: '700', color: 'var(--primary)' }}>Cargando Pregunta del Día...</div>;
  }

  if (!question) {
    return (
      <div style={{ textAlign: 'center', padding: '2.5rem', background: '#F8FAFC', borderRadius: 'var(--radius-md)', border: 'none', boxShadow: '0 4px 16px rgba(99,102,241,0.12)', marginTop: '2rem' }}>
        <h3 style={{ color: 'var(--text-muted)', fontWeight: '800' }}>¡Ups! No hay pregunta configurada para hoy.</h3>
      </div>
    );
  }

  return (
    <div className="daily-question-container" style={{
      background: 'white',
      borderRadius: 'var(--radius-md)',
      padding: '2.5rem',
      boxShadow: '0 4px 16px rgba(99,102,241,0.12)',
      marginTop: '2rem',
      border: 'none'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--bg-dark)', margin: 0, fontFamily: 'var(--font-heading)', fontWeight: '800' }}>
          💡 Pregunta del Día
        </h2>
        <span style={{ background: '#EEF2FF', color: 'var(--primary)', padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-full)', border: 'none', fontWeight: '800', fontSize: '0.9rem' }}>
          {question.subject}
        </span>
      </div>

      {!result ? (
        <>
          <p style={{ fontSize: '1.3rem', color: 'var(--bg-dark)', lineHeight: '1.6', marginBottom: '2rem', fontWeight: '700' }}>
            <span dangerouslySetInnerHTML={{ __html: question.question }} />
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            {question.options && question.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedOption(opt)}
                style={{
                  padding: '1.1rem 1.5rem',
                  borderRadius: 'var(--radius-sm)',
                  border: selectedOption === opt ? 'none' : '1px solid var(--border)',
                  background: selectedOption === opt ? 'var(--accent)' : 'white',
                  color: 'var(--bg-dark)',
                  fontSize: '1.1rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  fontWeight: '800',
                  boxShadow: selectedOption === opt ? '0 2px 8px rgba(99,102,241,0.20)' : '0 1px 3px rgba(0,0,0,0.06)'
                }}
              >
                <span style={{ marginRight: '0.75rem', opacity: 0.5 }}>{String.fromCharCode(65 + idx)}.</span> {opt}
              </button>
            ))}
          </div>

          {error && <div style={{ color: '#EF4444', marginBottom: '1.25rem', fontWeight: '800' }}>⚠️ {error}</div>}

          <button
            onClick={handleSubmit}
            disabled={!selectedOption || isSubmitting}
            className="btn-primary"
            style={{ width: '100%', padding: '1.1rem', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.5px', opacity: (!selectedOption || isSubmitting) ? 0.6 : 1 }}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Respuesta'}
          </button>
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <div style={{ fontSize: '4.5rem', marginBottom: '1rem', animation: 'float 2s ease-in-out infinite' }}>
            {result.isCorrect ? '🎉' : '💤'}
          </div>
          <h3 style={{ fontSize: '1.75rem', color: 'var(--bg-dark)', marginBottom: '1rem', fontFamily: 'var(--font-heading)', fontWeight: '800' }}>
            {result.isCorrect ? '¡Respuesta Correcta!' : 'Intento Registrado'}
          </h3>
          <p style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--primary-dark)', fontWeight: '800' }}>
            Has ganado <strong style={{ color: 'var(--accent)' }}>+{result.pointsEarned} puntos</strong>
          </p>
          {result.bonusAwarded && (
             <p style={{ color: 'var(--accent)', fontWeight: '800', marginBottom: '1rem', background: '#FEF3C7', padding: '0.5rem', borderRadius: '12px', border: 'none' }}>
               🌟 ¡Bono de Sesión Completada! (+2 ptos extras) 🌟
             </p>
          )}
          {!result.isCorrect && result.correctAnswerMessage && (
            <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', padding: '1.25rem', borderRadius: 'var(--radius-sm)', color: '#B91C1C', fontWeight: '700', textAlign: 'left' }}>
              {result.correctAnswerMessage}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DailyQuestion;
