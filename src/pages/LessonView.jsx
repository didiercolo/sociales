import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { lessonsData } from '../data/lessonsData';
import Quiz from '../components/Quiz';
import TextQuiz from '../components/TextQuiz';

const LessonView = () => {
    const { subject, gradeId, lessonId } = useParams();
    const gradeLessons = lessonsData[subject]?.[gradeId] || [];
    const lesson = gradeLessons.find(l => l.id.toString() === lessonId);

    if (!lesson) {
        return <Navigate to={`/${subject}/grade/${gradeId}`} replace />;
    }

    return (
        <div className="lesson-view container" style={{ padding: '3rem 1.5rem' }}>
            <Link to={`/${subject}/grade/${gradeId}`} className="back-link" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '2rem',
                color: 'var(--text-muted)',
                fontWeight: '600'
            }}>
                <span>←</span> Volver a Lecciones
            </Link>

            <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <span style={{
                    background: 'var(--secondary)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: 'full',
                    fontWeight: '800',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                    display: 'inline-block'
                }}>
                    Lección Interactiva
                </span>
                <h1 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '3.5rem',
                    color: 'var(--bg-dark)',
                    lineHeight: '1.2'
                }}>{lesson.title}</h1>
            </header>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {lesson.sections.map((section, index) => (
                    <section key={index} className="content-section" style={{ animation: `fadeIn 0.5s ease-out ${index * 0.1}s both` }}>
                        <h2 style={{ marginBottom: '2rem' }}>{section.title}</h2>

                        <div className="content-blocks">
                            {section.content.map((block, i) => (
                                <div key={i} dangerouslySetInnerHTML={{ __html: block }} style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: 'var(--text-main)' }} />
                            ))}
                        </div>

                        {section.videoId && (
                            <div className="video-container" style={{ marginTop: '2.5rem', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                                <iframe
                                    src={`https://www.youtube.com/embed/${section.videoId}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{ width: '100%', height: '100%' }}
                                ></iframe>
                            </div>
                        )}
                    </section>
                ))}

                {lesson.quiz && (
                    <div className="quiz-container-wrapper" style={{ marginTop: '5rem', animation: 'fadeIn 1s ease-out 0.5s both' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <span style={{ fontSize: '3rem', display: 'block' }}>🏁</span>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem' }}>¡Pon a prueba lo aprendido!</h2>
                            <p style={{ color: 'var(--text-muted)' }}>Responde las siguientes preguntas de selección para comenzar.</p>
                        </div>
                        <Quiz questions={lesson.quiz} questionCount={lesson.questionCount || 5} />
                    </div>
                )}

                {lesson.openQuestions && (
                    <div className="text-quiz-container-wrapper" style={{ marginTop: '5rem', marginBottom: '3rem', animation: 'fadeIn 1s ease-out 0.8s both' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <span style={{ fontSize: '3rem', display: 'block' }}>✍️</span>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem' }}>Preguntas de Desarrollo</h2>
                            <p style={{ color: 'var(--text-muted)' }}>Mide tus conocimientos respondiendo con tus propias palabras estas preguntas abiertas.</p>
                        </div>
                        <TextQuiz textQuestions={lesson.openQuestions} questionCount={5} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default LessonView;
