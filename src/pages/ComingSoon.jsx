import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ComingSoon = () => {
    const navigate = useNavigate();

    return (
        <div className="coming-soon-page">

            <section style={{ padding: '6rem 0', background: 'var(--bg-dark)', color: 'white', overflow: 'hidden', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'var(--primary)', filter: 'blur(150px)', opacity: '0.2' }}></div>
                <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '300px', height: '300px', background: 'var(--secondary)', filter: 'blur(150px)', opacity: '0.2' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: '1' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div style={{ textAlign: 'left' }}>
                            <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Pronto más contenido</span>
                            <h2 style={{ fontSize: '3rem', marginTop: '1rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>Expandimos el Portal</h2>
                            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem' }}>
                                Estamos preparando el lanzamiento de nuestra plataforma premium con todo lo que necesitas para tu éxito académico.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '12px' }}>💎</div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>Plan de Pago Premium</h4>
                                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Español, Matemática, Sociales y Ciencias completo con prácticas y material de apoyo.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '12px' }}>🏆</div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>Trivias y Rankings</h4>
                                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Acceso a las tablas de puntajes para ver los mejores resultados en tiempo real.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '12px' }}>📝</div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>Exámenes cada 2 días</h4>
                                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Quizzes nuevos para practicar las pruebas MEP estandarizadas constantemente.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '3rem', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>¿Quieres informarte más?</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem' }}>Escríbenos para conocer los detalles del próximo plan de pago y asegurar tu acceso.</p>
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
                                WhatsApp 6032-6413
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '4rem 2rem', textAlign: 'center', background: 'white' }}>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <button
                        onClick={() => navigate(-1)}
                        className="btn-secondary"
                        style={{
                            padding: '1rem 2.5rem',
                            borderRadius: 'var(--radius-md)',
                            fontWeight: '700',
                            cursor: 'pointer',
                            border: '2px solid var(--secondary)',
                            background: 'transparent',
                            color: 'var(--secondary)',
                            transition: 'var(--transition)'
                        }}
                    >
                        Volver Atrás
                    </button>
                    <Link
                        to="/"
                        className="btn-primary"
                        style={{
                            padding: '1rem 2.5rem',
                            borderRadius: 'var(--radius-md)',
                            fontWeight: '700',
                            textDecoration: 'none',
                            background: 'var(--secondary)',
                            color: 'white',
                            transition: 'var(--transition)'
                        }}
                    >
                        Ver Otras Materias
                    </Link>
                </div>
            </section>

            <style>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
            `}</style>
        </div>
    );
};

export default ComingSoon;
