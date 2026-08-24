import React from 'react';
import { Link } from 'react-router-dom';

// Not linked from the nav or the home page; reached by direct URL and listed in sitemap.xml.
const Sonny = () => {
    const repasos = [
        {
            id: 'espanol',
            name: 'Español',
            kicker: 'Examen 3 set 2026',
            desc: 'Resumen del II Semestre: parónimos y homónimos, comprensión lectora y gramática, con quiz al final.',
            icon: '📖',
            accent: '#F59E0B',
            accentLight: '#FFFBEB',
            status: 'Disponible',
            disabled: false,
            link: '/espanol/lesson/sonny-resumen-espanol',
        },
        {
            id: 'language-arts',
            name: 'Language Arts',
            kicker: 'Exam Sep 2, 2026',
            desc: 'II Semester study guide: Future Continuous, Balance vocabulary, Defining Relative Clauses and Instructional Guide writing, with quiz.',
            icon: '📝',
            accent: '#8B5CF6',
            accentLight: '#F5F3FF',
            status: 'Disponible',
            disabled: false,
            link: '/language-arts/lesson/sonny-language-arts-6',
        },
        {
            id: 'matematicas',
            name: 'Matemática',
            kicker: 'Temas 3 y 4',
            desc: 'Repaso de exponentes, M.C.D. y m.c.m., expresiones numéricas y algebraicas, y ecuaciones de un paso, con quiz al final.',
            icon: '🔢',
            accent: '#EF4444',
            accentLight: '#FEF2F2',
            status: 'Disponible',
            disabled: false,
            link: '/matematicas/lesson/sonny-resumen-matematicas',
        },
        {
            id: 'sociales',
            name: 'Estudios Sociales',
            kicker: 'En preparación',
            desc: 'Resumen de repaso para el examen de Estudios Sociales.',
            icon: '🌍',
            accent: '#10B981',
            accentLight: '#ECFDF5',
            status: 'Próximamente',
            disabled: true,
            link: '#',
        },
        {
            id: 'ciencias',
            name: 'Ciencias',
            kicker: 'En preparación',
            desc: 'Resumen de repaso para el examen de Ciencias.',
            icon: '🔬',
            accent: '#3B82F6',
            accentLight: '#EFF6FF',
            status: 'Próximamente',
            disabled: true,
            link: '#',
        },
    ];

    return (
        <section style={{ padding: '4rem 0 5rem' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <p className="section-label" style={{ fontSize: '1.25rem', letterSpacing: '.16em' }}>Sonny</p>
                    <h1 className="section-heading">Repaso Exámenes</h1>
                    <p className="section-sub" style={{ margin: '0 auto' }}>
                        Resúmenes de estudio con quiz para cada materia.
                    </p>
                </div>

                <div className="lessons-grid">
                    {repasos.map(item => {
                        const CardWrapper = item.disabled ? 'div' : Link;
                        const wrapperProps = item.disabled ? {} : { to: item.link };

                        return (
                            <CardWrapper
                                key={item.id}
                                {...wrapperProps}
                                className={`lesson-card${item.disabled ? ' disabled' : ''}`}
                            >
                                <div style={{ height: '6px', background: item.disabled ? '#E5E7EB' : item.accent }} />

                                <div style={{ padding: '1.5rem 1.25rem 0', display: 'flex', alignItems: 'center', gap: '.875rem' }}>
                                    <div style={{
                                        width: 52,
                                        height: 52,
                                        borderRadius: '12px',
                                        background: item.disabled ? '#F3F4F6' : item.accentLight,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.6rem',
                                        flexShrink: 0
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <span style={{
                                            fontSize: '.7rem',
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            letterSpacing: '.06em',
                                            color: item.disabled ? 'var(--text-muted)' : item.accent,
                                            display: 'block',
                                            marginBottom: '.15rem'
                                        }}>
                                            {item.kicker}
                                        </span>
                                        <h3 style={{
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: '1.1rem',
                                            fontWeight: 700,
                                            color: 'var(--text-main)'
                                        }}>
                                            {item.name}
                                        </h3>
                                    </div>
                                </div>

                                <div className="card-content" style={{ paddingTop: '.875rem' }}>
                                    <p>{item.desc}</p>
                                </div>

                                <div className="card-footer">
                                    <span className={`status-tag ${item.disabled ? 'status-soon' : 'status-available'}`}>
                                        {item.status}
                                    </span>
                                    {!item.disabled && (
                                        <span style={{ color: item.accent, fontSize: '.85rem', fontWeight: 600 }}>Entrar →</span>
                                    )}
                                </div>
                            </CardWrapper>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Sonny;
