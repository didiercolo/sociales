import React, { useState } from 'react';

const WeeklyChallengeActive = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  isSubmitting,
  result,
  onNext,
  isLastQuestion,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleSubmit = () => {
    if (!selectedAnswer || isSubmitting) return;
    onSubmit(selectedAnswer);
    setSelectedAnswer(null);
  };

  const { question: questionText, options = [], subject } = question || {};

  return (
    <div style={{
      background: 'white',
      borderRadius: 'var(--radius-md)',
      padding: '2.5rem',
      boxShadow: '0 4px 16px rgba(99,102,241,0.12)',
      maxWidth: 620,
      margin: '0 auto',
    }}>
      {/* Header row */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.75rem',
      }}>
        <span style={{
          background: '#EEF2FF',
          color: 'var(--primary)',
          padding: '0.4rem 1rem',
          borderRadius: 'var(--radius-full)',
          fontWeight: '700',
          fontSize: '0.875rem',
        }}>
          Pregunta {questionIndex + 1} de {totalQuestions}
        </span>

        {subject && (
          <span style={{
            color: 'var(--text-muted)',
            fontSize: '0.875rem',
            fontWeight: '600',
          }}>
            {subject}
          </span>
        )}
      </div>

      {/* Progress bar */}
      <div style={{
        height: 6,
        background: '#EEF2FF',
        borderRadius: 'var(--radius-full)',
        marginBottom: '2rem',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: `${((questionIndex + 1) / totalQuestions) * 100}%`,
          background: 'var(--primary)',
          borderRadius: 'var(--radius-full)',
          transition: 'width 0.4s ease',
        }} />
      </div>

      {/* Question text */}
      <p style={{
        fontSize: '1.25rem',
        color: 'var(--bg-dark)',
        lineHeight: '1.6',
        marginBottom: '2rem',
        fontWeight: '700',
        fontFamily: 'var(--font-heading)',
      }}>
        {questionText}
      </p>

      {result ? (
        /* ── Feedback section (shown after submit) ── */
        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
            {result.isCorrect ? '✅' : '❌'}
          </div>
          <p style={{ fontWeight: 800, fontSize: '1.1rem', color: result.isCorrect ? '#16A34A' : '#DC2626', marginBottom: '0.5rem' }}>
            {result.isCorrect ? '¡Correcto!' : 'Incorrecto'}
          </p>
          <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '1rem' }}>
            +{result.pointsEarned} pts
          </p>
          {!result.isCorrect && result.correctAnswerMessage && (
            <div style={{
              background: '#FEF2F2', border: '1px solid #FCA5A5',
              borderRadius: 'var(--radius-sm)', padding: '1rem',
              color: '#B91C1C', fontWeight: 700, textAlign: 'left',
              marginBottom: '1rem', fontSize: '0.95rem'
            }}>
              {result.correctAnswerMessage}
            </div>
          )}
          <button
            onClick={onNext}
            style={{
              background: 'var(--primary)', color: 'white', border: 'none',
              borderRadius: 'var(--radius-full)', padding: '0.75rem 2rem',
              fontSize: '1rem', fontWeight: 800, cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(99,102,241,0.30)'
            }}
          >
            {isLastQuestion ? 'Ver Resultados →' : 'Siguiente →'}
          </button>
        </div>
      ) : (
        /* ── Options + Confirmar (shown before submit) ── */
        <>
          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
            {options.map((option, idx) => {
              const isSelected = selectedAnswer === option;
              return (
                <button
                  key={idx}
                  onClick={() => !isSubmitting && setSelectedAnswer(option)}
                  disabled={isSubmitting}
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: isSelected
                      ? '2px solid var(--primary)'
                      : '1px solid var(--border)',
                    background: isSelected ? 'var(--accent)' : 'white',
                    color: 'var(--bg-dark)',
                    fontSize: '1rem',
                    textAlign: 'left',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'var(--transition)',
                    fontWeight: isSelected ? '700' : '500',
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                >
                  <span style={{
                    marginRight: '0.75rem',
                    opacity: 0.5,
                    fontWeight: '800',
                    fontSize: '0.9rem',
                  }}>
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  {option}
                </button>
              );
            })}
          </div>

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            disabled={!selectedAnswer || isSubmitting}
            style={{
              width: '100%',
              padding: '0.9rem',
              background: 'var(--primary)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              fontSize: '1.05rem',
              fontWeight: '700',
              fontFamily: 'var(--font-heading)',
              cursor: !selectedAnswer || isSubmitting ? 'not-allowed' : 'pointer',
              opacity: !selectedAnswer || isSubmitting ? 0.55 : 1,
              boxShadow: !selectedAnswer || isSubmitting ? 'none' : '0 4px 14px rgba(99,102,241,0.30)',
              transition: 'var(--transition)',
            }}
          >
            {isSubmitting ? 'Enviando...' : 'Confirmar Respuesta'}
          </button>
        </>
      )}
    </div>
  );
};

export default WeeklyChallengeActive;
