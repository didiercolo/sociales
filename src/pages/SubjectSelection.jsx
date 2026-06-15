import React from 'react';
import { Link } from 'react-router-dom';
import ScoreboardWidget from '../components/ScoreboardWidget';

const SubjectSelection = () => {
    const subjects = [
        {
            id: 'ciencias',
            name: 'Ciencias',
            desc: 'Explora el mundo natural, los seres vivos y la materia.',
            icon: '🧪',
            accent: '#3B82F6',
            accentLight: '#EFF6FF',
            status: 'Disponible',
            disabled: false,
            link: '/ciencias'
        },
        {
            id: 'sociales',
            name: 'Estudios Sociales',
            desc: 'Descubre la geografía, historia y cultura de Costa Rica.',
            icon: '🌍',
            accent: '#10B981',
            accentLight: '#ECFDF5',
            status: 'Disponible',
            disabled: false,
            link: '/sociales'
        },
        {
            id: 'espanol',
            name: 'Español',
            desc: 'Fortalece tu lectura, escritura y comunicación.',
            icon: '📚',
            accent: '#F59E0B',
            accentLight: '#FFFBEB',
            status: 'Disponible',
            disabled: false,
            link: '/espanol'
        },
        {
            id: 'matematicas',
            name: 'Matemáticas',
            desc: 'Domina los números, las formas y el razonamiento lógico.',
            icon: '📐',
            accent: '#8B5CF6',
            accentLight: '#F5F3FF',
            status: 'Próximamente',
            disabled: true,
            link: '/matematicas'
        },
    ];

    const features = [
        { icon: '📝', title: 'Resúmenes Claros', desc: 'Síntesis de los contenidos oficiales del MEP para que estudies lo que realmente importa.' },
        { icon: '📖', title: 'Lecciones Variadas', desc: 'Contenido estructurado por temas con explicaciones paso a paso y material visual.' },
        { icon: '🎯', title: 'Preguntas Aleatorias', desc: 'Bancos de preguntas que se seleccionan al azar para que cada práctica sea un nuevo reto.' },
        { icon: '📂', title: 'Material Adicional', desc: 'Descarga exámenes de práctica y material extra para reforzar tus conocimientos.' },
    ];

    return (
        <div>
            {/* Hero */}
            <section className="hero" style={{ paddingBottom: '3rem' }}>
                <div className="container">
                    <span className="badge">Plataforma 6to Grado</span>
                    <h1 className="hero-headline">
                        Domina tus Materias<br />con EduPortal CR
                    </h1>
                    <p className="hero-sub">
                        La herramienta educativa más completa para estudiantes de{' '}
                        <strong>6to Grado</strong>. Aprende, practica y domina cada tema
                        con contenido diseñado para tu éxito.
                    </p>
                    <button
                        onClick={() => document.getElementById('materias')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn-primary"
                    >
                        Comenzar a Aprender →
                    </button>
                </div>
            </section>

            {/* Subject cards */}
            <section id="materias" style={{ padding: '1rem 0 5rem' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <p className="section-label">Materias disponibles</p>
                        <h2 className="section-heading">Elige tu área de estudio</h2>
                        <p className="section-sub" style={{ margin: '0 auto' }}>
                            Selecciona la materia que deseas explorar hoy.
                        </p>
                    </div>

                    <div className="lessons-grid">
                        {subjects.map(subject => {
                            const CardWrapper = subject.disabled ? 'div' : Link;
                            const wrapperProps = subject.disabled
                                ? {}
                                : { to: subject.link };

                            return (
                                <CardWrapper
                                    key={subject.id}
                                    {...wrapperProps}
                                    className={`lesson-card${subject.disabled ? ' disabled' : ''}`}
                                >
                                    {/* Coloured top strip */}
                                    <div style={{
                                        height: '6px',
                                        background: subject.disabled ? '#E5E7EB' : subject.accent
                                    }} />

                                    {/* Icon area */}
                                    <div style={{
                                        padding: '1.5rem 1.25rem 0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '.875rem'
                                    }}>
                                        <div style={{
                                            width: 52,
                                            height: 52,
                                            borderRadius: '12px',
                                            background: subject.disabled ? '#F3F4F6' : subject.accentLight,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '1.6rem',
                                            flexShrink: 0
                                        }}>
                                            {subject.icon}
                                        </div>
                                        <div>
                                            {!subject.disabled && (
                                                <span style={{
                                                    fontSize: '.7rem',
                                                    fontWeight: 600,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '.06em',
                                                    color: subject.accent,
                                                    display: 'block',
                                                    marginBottom: '.15rem'
                                                }}>
                                                    Activo
                                                </span>
                                            )}
                                            <h3 style={{
                                                fontFamily: 'var(--font-heading)',
                                                fontSize: '1.1rem',
                                                fontWeight: 700,
                                                color: 'var(--text-main)'
                                            }}>
                                                {subject.name}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="card-content" style={{ paddingTop: '.875rem' }}>
                                        <p>{subject.desc}</p>
                                    </div>

                                    <div className="card-footer">
                                        <span className={`status-tag ${subject.disabled ? 'status-soon' : 'status-available'}`}>
                                            {subject.status}
                                        </span>
                                        {!subject.disabled && (
                                            <span style={{
                                                color: subject.accent,
                                                fontSize: '.85rem',
                                                fontWeight: 600
                                            }}>
                                                Entrar →
                                            </span>
                                        )}
                                    </div>
                                </CardWrapper>
                            );
                        })}
                    </div>
                </div>
            </section>

            <ScoreboardWidget />

            {/* Features */}
            <section style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '5rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <p className="section-label">¿Por qué EduPortal?</p>
                        <h2 className="section-heading">Todo lo que necesitas para tu estudio</h2>
                        <p className="section-sub" style={{ margin: '0 auto' }}>
                            Metodología interactiva diseñada para 6to grado.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem' }}>
                        {features.map((f, i) => (
                            <div key={i} className="feature-card">
                                <div className="feature-icon">{f.icon}</div>
                                <h4>{f.title}</h4>
                                <p>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA dark */}
            <section className="cta-section">
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
                        <div>
                            <span style={{ color: 'var(--accent)', fontSize: '.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em' }}>
                                Próximamente
                            </span>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: '#fff', margin: '1rem 0 1.25rem', lineHeight: 1.2 }}>
                                Expandimos el Portal
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,.65)', fontSize: '1rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                                Estamos preparando el lanzamiento de nuestra plataforma premium con todo lo que necesitas.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                {[
                                    { icon: '💎', title: 'Plan Premium', desc: 'Español, Matemática, Sociales y Ciencias completo.' },
                                    { icon: '🏆', title: 'Trivias y Rankings', desc: 'Compite y mira quién lidera en tiempo real.' },
                                    { icon: '📝', title: 'Exámenes MEP', desc: 'Quizzes nuevos basados en pruebas estandarizadas.' },
                                ].map((item, i) => (
                                    <div key={i} className="cta-item">
                                        <div className="cta-dot">{item.icon}</div>
                                        <div>
                                            <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: '.2rem' }}>{item.title}</h4>
                                            <p style={{ color: 'rgba(255,255,255,.55)', fontSize: '.875rem' }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="cta-box">
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '.875rem' }}>
                                ¿Quieres informarte más?
                            </h3>
                            <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.9375rem', marginBottom: '2rem', lineHeight: 1.65 }}>
                                Escríbenos para conocer los detalles del próximo plan de pago y asegurar tu acceso.
                            </p>
                            <a
                                href="https://wa.me/50660326413"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp"
                                style={{ fontSize: '1rem', padding: '.75rem 1.5rem' }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.407 3.481 2.239 2.24 3.477 5.228 3.475 8.411-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.664zm6.25-3.313c1.552.92 3.117 1.403 4.839 1.404h.01c5.444 0 9.873-4.429 9.875-9.875.001-2.639-1.027-5.122-2.895-6.991-1.868-1.868-4.353-2.896-6.993-2.897-5.447 0-9.875 4.426-9.877 9.874-.001 1.832.501 3.615 1.454 5.168l-1.012 3.693 3.793-.997zm11.332-6.85c-.321-.161-1.902-.938-2.198-1.045-.297-.108-.512-.161-.727.161-.215.321-.834 1.045-1.022 1.26-.188.215-.376.242-.697.081-.321-.161-1.357-.501-2.585-1.595-.955-.852-1.6-1.904-1.787-2.226-.188-.321-.02-.494.14-.654.144-.143.321-.376.482-.563.161-.188.215-.321.321-.536.108-.215.053-.402-.027-.563-.081-.161-.727-1.751-1.012-2.435-.278-.668-.56-.577-.773-.588-.2-.01-.429-.012-.658-.012-.229 0-.603.085-.92.428-.316.344-1.206 1.181-1.206 2.879 0 1.699 1.236 3.342 1.407 3.57.172.229 2.43 3.712 5.887 5.202.822.354 1.464.566 1.965.725.825.263 1.577.225 2.171.137.663-.099 1.902-.777 2.171-1.527.27-.75.27-1.393.189-1.527-.081-.132-.297-.213-.618-.374z" />
                                </svg>
                                WhatsApp 6032-6413
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SubjectSelection;
