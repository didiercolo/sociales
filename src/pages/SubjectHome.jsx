import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { subjectConfig } from '../data/subjectConfig';
import { lessonsData } from '../data/lessonsData';
import LessonCard from '../components/LessonCard';

const SubjectHome = () => {
    const { subject } = useParams();
    const config = subjectConfig[subject];

    if (!config) {
        return <Navigate to="/" replace />;
    }

    const { bloques, lessons } = lessonsData[subject];

    return (
        <div className="subject-home container" style={{ padding: '3rem 1.5rem' }}>
            {/* Back link */}
            <Link to="/" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                marginBottom: '2rem', color: 'var(--text-muted)', fontWeight: '600'
            }}>
                <span>&#8592;</span> Volver a Materias
            </Link>

            {/* Hero */}
            <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1rem' }}>
                    {config.icon}
                </span>
                <h1 style={{
                    fontFamily: 'var(--font-heading)', fontSize: '3rem',
                    color: config.accent, marginBottom: '0.5rem'
                }}>
                    {config.label}
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                    {lessons.length} lecciones disponibles
                </p>
            </header>

            {/* Bloques */}
            {bloques.map(bloque => {
                const bloqueLessons = lessons.filter(l => l.mepBloque === bloque.id);
                if (bloqueLessons.length === 0) return null;
                return (
                    <section key={bloque.id} style={{ marginBottom: '3rem' }}>
                        <h2 style={{
                            fontFamily: 'var(--font-heading)', fontSize: '1.75rem',
                            color: bloque.color, marginBottom: '1.5rem',
                            display: 'flex', alignItems: 'center', gap: '0.75rem'
                        }}>
                            <span>{bloque.icon}</span> {bloque.label}
                        </h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '1.5rem'
                        }}>
                            {bloqueLessons.map((lesson, idx) => (
                                <LessonCard
                                    key={lesson.id}
                                    id={lesson.id}
                                    title={lesson.title}
                                    description={lesson.description}
                                    subject={subject}
                                    bloqueColor={bloque.color}
                                    lessonNumber={idx + 1}
                                />
                            ))}
                        </div>
                    </section>
                );
            })}
        </div>
    );
};

export default SubjectHome;
