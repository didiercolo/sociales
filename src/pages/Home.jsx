import React from 'react';
import { Link } from 'react-router-dom';
import resumenImg from '../assets/resumen_mep.png';

const Home = () => {

    const otherGrades = [
        {
            id: 6,
            name: '6to Grado',
            status: '¡Gratis!',
            disabled: false,
            desc: '¡Materia completa y quizzes! Tu mejor aliado para brillar en las pruebas MEP y dominar los contenidos del año.',
            img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop',
            icon: '📜'
        },
        {
            id: 4,
            name: '4to Grado',
            status: 'No Disponible',
            disabled: true,
            desc: 'Viaja al pasado y descubre los secretos de la geografía e historia de nuestra tierra.',
            img: 'https://images.unsplash.com/photo-1544413647-ad541ca92e47?q=80&w=500&auto=format&fit=crop',
            icon: '🗺️'
        },
        {
            id: 5,
            name: '5to Grado',
            status: 'No Disponible',
            disabled: true,
            desc: 'Explora nuestra sociedad moderna y aprende a proteger el medio ambiente que nos rodea.',
            img: 'https://images.unsplash.com/photo-1594913785162-e6784d567df4?q=80&w=500&auto=format&fit=crop',
            icon: '🌿'
        },
        {
            id: 'resumen',
            name: 'Resumen General',
            status: 'No Disponible',
            disabled: true,
            desc: 'Preparación integral y repasos clave para las pruebas nacionales MEP 2026.',
            img: resumenImg,
            icon: '🎓'
        }
    ];

    return (
        <div className="home-page">
            <section className="hero" style={{ background: 'radial-gradient(circle at top right, rgba(46, 204, 113, 0.15), transparent), radial-gradient(circle at bottom left, rgba(52, 152, 219, 0.05), transparent)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'inline-block' }}>← Volver a Materias</Link>
                    <br />
                    <span className="badge">Plataforma 6to Grado</span>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', background: 'linear-gradient(135deg, var(--bg-dark) 0%, var(--primary) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Domina tus Materias con EduPortal CR
                    </h1>
                    <p style={{ fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto 2.5rem auto', lineHeight: '1.6' }}>
                        La herramienta definitiva para estudiantes de <strong>6to Grado</strong>. Prepárate para las pruebas MEP con contenido interactivo, resúmenes claros y prácticas constantes.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button
                            onClick={() => document.getElementById('grados')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-primary"
                        >
                            Comenzar a Estudiar
                        </button>
                    </div>
                </div>
            </section>

            <section id="grados" className="container" style={{ padding: '4rem 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--bg-dark)' }}>Elige tu Nivel de Aprendizaje</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Contenido especializado para cada etapa escolar, con explicaciones claras y retos divertidos.</p>
                </div>

                <div className="lessons-grid">
                    {otherGrades.map(grade => (
                        <Link key={grade.id} to={grade.disabled ? '#' : `/sociales/grade/${grade.id}`} className={`lesson-card ${grade.disabled ? 'disabled' : ''}`}>
                            <div className="card-image" style={{ backgroundImage: `url(${grade.img})` }}>
                                <div className="card-icon-overlay" style={{ background: grade.disabled ? '#94a3b8' : 'var(--primary)' }}>
                                    {grade.disabled ? '🔒' : grade.icon}
                                </div>
                                {!grade.disabled && <div className="card-icon-overlay" style={{ background: 'rgba(0,0,0,0.3)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🔒</div>}
                            </div>
                            <div className="card-content">
                                <h3>{grade.name}</h3>
                                <p>{grade.desc}</p>
                            </div>
                            <div className="card-footer" style={{ background: grade.disabled ? '#f1f5f9' : '#f8fafc' }}>
                                <span className={`status-tag ${grade.disabled ? '' : 'status-available'}`}>{grade.status}</span>
                                {!grade.disabled && <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.8rem' }}>ENTRAR →</span>}
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section style={{ padding: '5rem 0', background: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '1rem' }}>Todo lo que necesitas para ganar el año</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Diseñado específicamente para las necesidades de 6to grado.</p>
                    </div>

                    <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                        <div style={{ padding: '2.5rem', background: '#f8fafc', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>📝</div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Resúmenes de Contenido</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Explicaciones claras y concisas de cada tema para que no te pierdas ningún detalle importante.</p>
                        </div>

                        <div style={{ padding: '2.5rem', background: '#f8fafc', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>📖</div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Lecciones Interactivas</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Navega por diferentes lecciones multimedia que hacen que el estudio sea dinámico y entretenido.</p>
                        </div>

                        <div style={{ padding: '2.5rem', background: '#f8fafc', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🔡</div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Quizzes Inteligentes</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Cada lección genera preguntas aleatorias de nuestro banco para que nunca hagas el mismo examen dos veces.</p>
                        </div>

                        <div style={{ padding: '2.5rem', background: '#f8fafc', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>📂</div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Material de Apoyo</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Descarga PDFs, esquemas y material adicional para estudiar incluso cuando no estés conectado.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '6rem 0', background: 'var(--bg-dark)', color: 'white', overflow: 'hidden', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'var(--primary)', filter: 'blur(150px)', opacity: '0.2' }}></div>
                <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '300px', height: '300px', background: 'var(--secondary)', filter: 'blur(150px)', opacity: '0.2' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: '1' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Próximamente</span>
                            <h2 style={{ fontSize: '3rem', marginTop: '1rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>Expandimos tu aprendizaje</h2>
                            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem' }}>
                                Estamos trabajando duro para traerte la experiencia educativa más completa de Costa Rica.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '12px' }}>💎</div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>Plan de Pago Premium</h4>
                                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Acceso total a Español, Matemáticas, Sociales y Ciencias con material 100% completo.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '12px' }}>🏆</div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>Trivias y Rankings</h4>
                                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Compite en trivias nuevas cada 2 días y mira quién lidera la tabla de puntajes.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '12px' }}>📝</div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>Práctica MEP MEP</h4>
                                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Cuestionarios diseñados para replicar el formato de las pruebas estandarizadas nacionales.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '3rem', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>¿Quieres acceso anticipado?</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem' }}>Escríbenos para conocer más sobre el lanzamiento del plan premium y reservar tu espacio.</p>
                            <a
                                href="https://wa.me/50660326413"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                                style={{
                                    background: '#25D366',
                                    borderColor: '#25D366',
                                    fontSize: '1.2rem',
                                    padding: '1rem 2rem',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    textDecoration: 'none',
                                    color: 'white'
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.407 3.481 2.239 2.24 3.477 5.228 3.475 8.411-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.664zm6.25-3.313c1.552.92 3.117 1.403 4.839 1.404h.01c5.444 0 9.873-4.429 9.875-9.875.001-2.639-1.027-5.122-2.895-6.991-1.868-1.868-4.353-2.896-6.993-2.897-5.447 0-9.875 4.426-9.877 9.874-.001 1.832.501 3.615 1.454 5.168l-1.012 3.693 3.793-.997zm11.332-6.85c-.321-.161-1.902-.938-2.198-1.045-.297-.108-.512-.161-.727.161-.215.321-.834 1.045-1.022 1.26-.188.215-.376.242-.697.081-.321-.161-1.357-.501-2.585-1.595-.955-.852-1.6-1.904-1.787-2.226-.188-.321-.02-.494.14-.654.144-.143.321-.376.482-.563.161-.188.215-.321.321-.536.108-.215.053-.402-.027-.563-.081-.161-.727-1.751-1.012-2.435-.278-.668-.56-.577-.773-.588-.2-.01-.429-.012-.658-.012-.229 0-.603.085-.92.428-.316.344-1.206 1.181-1.206 2.879 0 1.699 1.236 3.342 1.407 3.57.172.229 2.43 3.712 5.887 5.202.822.354 1.464.566 1.965.725.825.263 1.577.225 2.171.137.663-.099 1.902-.777 2.171-1.527.27-.75.27-1.393.189-1.527-.081-.132-.297-.213-.618-.374z" /></svg>
                                Enviar Mensaje
                            </a>
                            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>O llámanos al 6032-6413</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
