import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import WeeklyChallengeStart from '../components/WeeklyChallenge/WeeklyChallengeStart';
import WeeklyChallengeActive from '../components/WeeklyChallenge/WeeklyChallengeActive';
import WeeklyChallengeResults from '../components/WeeklyChallenge/WeeklyChallengeResults';

const functions = getFunctions();

// State machine phases
const PHASE = {
  LOADING: 'LOADING',
  START: 'START',
  ACTIVE: 'ACTIVE',
  RESULTS: 'RESULTS',
};

function getISOWeekId(date = new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNum = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(weekNum).padStart(2, '0')}`;
}

const WeeklyChallengePage = () => {
  const { currentUser, userProfile, loading } = useAuth();

  const [phase, setPhase] = useState(PHASE.LOADING);
  const [weekDoc, setWeekDoc] = useState(null);
  const [weekId, setWeekId] = useState(null);
  const [noChallenge, setNoChallenge] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [totalPointsEarned, setTotalPointsEarned] = useState(0);
  const [bonusAwarded, setBonusAwarded] = useState(false);
  const [alreadyCompleted, setAlreadyCompleted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Holds the result of the last submitted answer until the user clicks Siguiente/Ver Resultados
  const [questionResult, setQuestionResult] = useState(null);
  // Remembers whether the last response indicated the challenge is now complete
  const lastResponseRef = useRef({ weeklyComplete: false });

  // Fetch weekly challenge doc on mount
  useEffect(() => {
    if (loading) return; // wait for auth to resolve

    const fetchWeeklyChallenge = async () => {
      setPhase(PHASE.LOADING);
      setFetchError(null);
      setNoChallenge(false);

      const currentWeekId = getISOWeekId();
      setWeekId(currentWeekId);

      try {
        const ref = doc(db, 'weeklyChallenge', currentWeekId);
        const snap = await getDoc(ref);

        if (!snap.exists()) {
          setNoChallenge(true);
          setPhase(PHASE.LOADING); // Stay in loading-like state, render no-challenge message
          return;
        }

        const data = { weekId: snap.id, ...snap.data() };
        setWeekDoc(data);

        // Re-fetch the user doc fresh so we don't rely on the stale AuthContext snapshot
        let weeklyWeekId = null;
        let weeklyAnsweredCount = 0;
        let weeklyBonusAwarded = false;

        if (currentUser) {
          const freshUserSnap = await getDoc(doc(db, 'users', currentUser.uid));
          const freshProfile = freshUserSnap.exists() ? freshUserSnap.data() : {};
          weeklyWeekId = freshProfile.weeklyWeekId ?? null;
          weeklyAnsweredCount = freshProfile.weeklyAnsweredCount ?? 0;
          weeklyBonusAwarded = freshProfile.weeklyBonusAwarded ?? false;
        }

        if (weeklyWeekId === currentWeekId && weeklyBonusAwarded) {
          // Already fully completed this week
          setAlreadyCompleted(true);
          setPhase(PHASE.RESULTS);
        } else if (
          weeklyWeekId === currentWeekId &&
          weeklyAnsweredCount > 0 &&
          !weeklyBonusAwarded
        ) {
          // Resume mid-challenge
          setQuestionIndex(weeklyAnsweredCount);
          setPhase(PHASE.ACTIVE);
        } else {
          setPhase(PHASE.START);
        }
      } catch (err) {
        console.error('Error fetching weekly challenge:', err);
        setFetchError('Ocurrió un error al cargar el reto. Por favor intenta de nuevo.');
        setPhase(PHASE.LOADING);
      }
    };

    fetchWeeklyChallenge();
  }, [loading, userProfile]);

  const handleStart = () => {
    setQuestionIndex(0);
    setPhase(PHASE.ACTIVE);
  };

  const handleSubmitAnswer = async (selectedAnswer) => {
    if (isSubmitting || !weekDoc) return;
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const submitAnswer = httpsCallable(functions, 'submitAnswer');

      const response = await submitAnswer({
        questionId: weekId,
        answer: selectedAnswer,
        questionType: 'weekly',
        questionIndex,
      });

      const data = response.data || {};
      const pointsEarned = data.pointsEarned ?? 0;
      setTotalPointsEarned((prev) => prev + pointsEarned);

      if (data.bonusAwarded) {
        setBonusAwarded(true);
      }

      // Remember whether the challenge is now complete so handleNextQuestion can use it
      lastResponseRef.current = { weeklyComplete: data.weeklyComplete ?? false };

      // Show the per-question feedback; do NOT advance yet
      setQuestionResult({
        isCorrect: data.isCorrect,
        correctAnswerMessage: data.correctAnswerMessage,
        pointsEarned,
      });
    } catch (err) {
      console.error('Error submitting weekly answer:', err);
      setSubmitError('Error al enviar la respuesta. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextQuestion = () => {
    const questions = weekDoc?.questions || [];
    const isLast = questionIndex + 1 >= questions.length;
    const weeklyComplete = lastResponseRef.current.weeklyComplete;

    setQuestionResult(null);

    if (weeklyComplete || isLast) {
      setPhase(PHASE.RESULTS);
    } else {
      setQuestionIndex((prev) => prev + 1);
    }
  };

  // --- Auth loading guard (wait for auth to resolve before showing login prompt) ---
  if (loading) {
    return (
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '3rem 1.5rem', textAlign: 'center', fontWeight: '700', color: 'var(--primary)' }}>
        Cargando...
      </div>
    );
  }

  // --- Auth guard ---
  if (!currentUser) {
    return (
      <div style={{ maxWidth: 540, margin: '3rem auto', padding: '0 1.5rem' }}>
        <div style={{
          background: 'white',
          borderRadius: 'var(--radius-md)',
          padding: '2.5rem',
          boxShadow: '0 4px 16px rgba(99,102,241,0.12)',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.75rem',
            color: 'var(--bg-dark)',
            marginBottom: '0.75rem',
            fontWeight: '800',
          }}>
            Reto Semanal
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>
            Inicia sesión para participar en el Reto Semanal y ganar puntos extra.
          </p>
          <Link
            to="/login"
            style={{
              display: 'inline-block',
              background: 'var(--primary)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              fontWeight: '700',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(99,102,241,0.30)',
            }}
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>
    );
  }

  // --- Page wrapper with back link ---
  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '3rem 1.5rem' }}>
      <Link
        to="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '2rem',
          color: 'var(--text-muted)',
          fontWeight: '600',
          textDecoration: 'none',
        }}
      >
        <span>&#8592;</span> Inicio
      </Link>

      <h1 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '2.5rem',
        color: 'var(--bg-dark)',
        marginBottom: '0.5rem',
      }}>
        🏆 Reto Semanal
      </h1>

      <p style={{
        color: 'var(--text-muted)',
        fontSize: '1.1rem',
        marginBottom: '2rem',
      }}>
        Completa el reto de esta semana y gana puntos extra
      </p>

      {/* LOADING / NO CHALLENGE / ERROR */}
      {phase === PHASE.LOADING && !noChallenge && !fetchError && (
        <div style={{ textAlign: 'center', padding: '2rem', fontWeight: '700', color: 'var(--primary)' }}>
          Cargando Reto Semanal...
        </div>
      )}

      {phase === PHASE.LOADING && noChallenge && (
        <div style={{
          textAlign: 'center',
          padding: '2.5rem',
          background: '#F8FAFC',
          borderRadius: 'var(--radius-md)',
          boxShadow: '0 4px 16px rgba(99,102,241,0.12)',
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: '600' }}>
            Esta semana aún no hay reto disponible.
          </p>
        </div>
      )}

      {phase === PHASE.LOADING && fetchError && (
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          color: '#EF4444',
          fontWeight: '600',
        }}>
          ⚠️ {fetchError}
        </div>
      )}

      {/* START */}
      {phase === PHASE.START && weekDoc && (
        <WeeklyChallengeStart weekDoc={weekDoc} onStart={handleStart} />
      )}

      {/* ACTIVE */}
      {phase === PHASE.ACTIVE && weekDoc && weekDoc.questions && (
        <>
          <WeeklyChallengeActive
            question={weekDoc.questions[questionIndex]}
            questionIndex={questionIndex}
            totalQuestions={weekDoc.questions.length}
            onSubmit={handleSubmitAnswer}
            isSubmitting={isSubmitting}
            result={questionResult}
            onNext={handleNextQuestion}
            isLastQuestion={questionIndex + 1 === weekDoc.questions.length}
          />
          {submitError && (
            <p style={{ color: '#EF4444', textAlign: 'center', marginTop: '1rem', fontWeight: 700 }}>
              ⚠️ {submitError}
            </p>
          )}
        </>
      )}

      {/* RESULTS */}
      {phase === PHASE.RESULTS && (
        <WeeklyChallengeResults
          totalPointsEarned={totalPointsEarned}
          bonusAwarded={bonusAwarded}
          weekDoc={weekDoc}
          alreadyCompleted={alreadyCompleted}
        />
      )}
    </div>
  );
};

export default WeeklyChallengePage;
