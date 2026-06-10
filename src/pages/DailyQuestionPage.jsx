import React from 'react';
import { Link } from 'react-router-dom';
import DailyQuestion from '../components/DailyQuestion';

const DailyQuestionPage = () => {
    return (
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '3rem 1.5rem' }}>
            <Link
                to="/"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '2rem',
                    color: 'var(--text-muted)',
                    fontWeight: '600',
                }}
            >
                <span>&#8592;</span> Inicio
            </Link>

            <h1
                style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.5rem',
                    color: 'var(--primary)',
                    marginBottom: '0.5rem',
                }}
            >
                ⭐ Pregunta del Día
            </h1>

            <p
                style={{
                    color: 'var(--text-muted)',
                    fontSize: '1.1rem',
                    marginBottom: '1.5rem',
                }}
            >
                Responde la pregunta de hoy y gana puntos
            </p>

            <DailyQuestion />
        </div>
    );
};

export default DailyQuestionPage;
