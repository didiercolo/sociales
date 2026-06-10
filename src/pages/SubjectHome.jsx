import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { subjectConfig } from '../data/subjectConfig';
import { lessonsData } from '../data/lessonsData';
import LessonCard from '../components/LessonCard';
import { useAuth } from '../context/AuthContext';

const SubjectHome = () => {
    const { subject } = useParams();
    const config = subjectConfig[subject];
    const { currentUser, userProfile } = useAuth();

    if (!config) {
        return <Navigate to="/" replace />;
    }

    const { bloques, lessons } = lessonsData[subject];
    const showBanner = !currentUser || !userProfile || userProfile.tier < 2;

    return (
        <div className="subject-home container" style={{ padding: '3rem 1.5rem' }}>
            <Link to="/" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                marginBottom: '2rem', color: 'var(--text-muted)', fontWeight: '600'
            }}>
                <span>&#8592;</span> Volver a Materias
            </Link>

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
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                    {lessons.length} lecciones disponibles
                </p>
                <Link
                    to={`/simulacro/${subject}`}
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        background: 'var(--primary)', color: 'white',
                        padding: '0.6rem 1.4rem', borderRadius: 'var(--radius-full)',
                        fontWeight: 700, fontSize: '0.95rem',
                        border: '2px solid var(--bg-dark)',
                        boxShadow: '3px 3px 0 var(--bg-dark)',
                        textDecoration: 'none'
                    }}
                >
                    🎯 Practicar Simulacro MEP
                </Link>
            </header>

            {bloques.map((bloque, bloqueIdx) => {
                const bloqueLessons = lessons.filter(l => l.mepBloque === bloque.id);
                if (bloqueLessons.length === 0) return null;
                return (
                    <React.Fragment key={bloque.id}>
                        <section style={{ marginBottom: '3rem' }}>
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

                        {bloqueIdx === 0 && showBanner && (
                            <div style={{
                                background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
                                border: '3px solid var(--bg-dark)',
                                borderRadius: 'var(--radius-md)',
                                boxShadow: '4px 4px 0 var(--bg-dark)',
                                padding: '1.5rem 2rem',
                                marginBottom: '3rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '1rem',
                                flexWrap: 'wrap'
                            }}>
                                <div>
                                    <p style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--bg-dark)', marginBottom: '0.25rem' }}>
                                        🚀 ¿Querés más?
                                    </p>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                        Con Aventurero obtenés acceso completo + puntos dobles en el ranking.
                                    </p>
                                </div>
                                <Link
                                    to="/coming-soon"
                                    style={{
                                        background: 'var(--primary)', color: 'white',
                                        padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-full)',
                                        fontWeight: 700, fontSize: '0.9rem',
                                        border: '2px solid var(--bg-dark)',
                                        boxShadow: '2px 2px 0 var(--bg-dark)',
                                        textDecoration: 'none', whiteSpace: 'nowrap'
                                    }}
                                >
                                    Ver planes →
                                </Link>
                            </div>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default SubjectHome;
