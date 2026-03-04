import React from 'react';
import { useParams, Link } from 'react-router-dom';
import LessonCard from '../components/LessonCard';
import { lessonsData } from '../data/lessonsData';

const LessonsList = () => {
    const { subject, gradeId } = useParams();
    const lessons = lessonsData[subject]?.[gradeId] || [];

    return (
        <div className="lessons-list-view container" style={{ padding: '3rem 1.5rem' }}>
            <Link to={`/${subject}`} className="back-link" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '2rem',
                color: 'var(--text-muted)',
                fontWeight: '600'
            }}>
                <span>←</span> Volver a Grados
            </Link>

            <div style={{ marginBottom: '3rem' }}>
                <h2 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '3rem',
                    color: 'var(--bg-dark)',
                    marginBottom: '0.5rem'
                }}>
                    {gradeId === 'resumen' ? 'Resumen General' : `${gradeId}to Grado`}
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
                    {gradeId === 'resumen' ? 'Material de preparación integral MEP 2026' : 'Explora las lecciones y pon a prueba tus conocimientos'}
                </p>
            </div>

            <div className="lessons-grid">
                {lessons.length > 0 ? (
                    lessons.map((lesson, idx) => (
                        <LessonCard
                            key={lesson.id}
                            id={lesson.id}
                            title={lesson.title}
                            description={lesson.description}
                            gradeId={gradeId}
                            subject={subject}
                            imageUrl={`https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=500&auto=format&fit=crop&sig=${idx}`}
                        />
                    ))
                ) : (
                    <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '4rem', background: 'white', borderRadius: 'var(--radius-lg)' }}>
                        <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🏗️</span>
                        <h3>Próximamente</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Estamos preparando lecciones increíbles para este nivel.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LessonsList;
