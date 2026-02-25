import React from 'react';
import { Link } from 'react-router-dom';
import resumenImg from '../assets/resumen_mep.png';

const Home = () => {
    const grades = [
        {
            id: 4,
            name: '4to Grado',
            status: 'Disponible',
            disabled: false,
            desc: 'Explora la geografía e historia profunda de Costa Rica.',
            img: 'https://images.unsplash.com/photo-1544413647-ad541ca92e47?q=80&w=500&auto=format&fit=crop',
            icon: '🗺️'
        },
        {
            id: 5,
            name: '5to Grado',
            status: 'Disponible',
            disabled: false,
            desc: 'Aprende sobre nuestra sociedad moderna y el ambiente.',
            img: 'https://images.unsplash.com/photo-1594913785162-e6784d567df4?q=80&w=500&auto=format&fit=crop',
            icon: '🌿'
        },
        {
            id: 6,
            name: '6to Grado',
            status: 'Disponible',
            disabled: false,
            desc: 'Domina los eventos clave y reformas que forjaron el país.',
            img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=500&auto=format&fit=crop',
            icon: '📜'
        },
        {
            id: 'resumen',
            name: 'Resumen General',
            status: 'Disponible',
            disabled: false,
            desc: 'Preparación integral para las pruebas MEP 2026.',
            img: resumenImg,
            icon: '🎓'
        }
    ];

    return (
        <div className="home-page">
            <section className="hero">
                <div className="container">
                    <span style={{ background: 'var(--accent)', color: 'var(--bg-dark)', padding: '4px 12px', borderRadius: 'full', fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '1rem', display: 'inline-block' }}>Educación Divertida</span>
                    <h2>¡Bienvenido a tu aventura de Estudios Sociales!</h2>
                    <p>Explora el mundo, la historia y la cultura de una manera divertida, interactiva y moderna.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button
                            onClick={() => document.getElementById('grados')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-primary"
                        >
                            Comenzar Ahora
                        </button>
                    </div>
                </div>
            </section>

            <section id="grados" className="container" style={{ padding: '4rem 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--bg-dark)' }}>Selecciona tu Grado</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Elige tu nivel para comenzar a explorar contenidos personalizados</p>
                </div>

                <div className="lessons-grid">
                    {grades.map(grade => (
                        <div key={grade.id}>
                            {grade.disabled ? (
                                <div className="lesson-card disabled">
                                    <div className="card-image" style={{ backgroundImage: `url(${grade.img})` }}>
                                        <div className="card-icon-overlay">🔒</div>
                                    </div>
                                    <div className="card-content">
                                        <h3>{grade.name}</h3>
                                        <p>{grade.desc}</p>
                                    </div>
                                    <div className="card-footer">
                                        <span className="status-tag">Próximamente</span>
                                    </div>
                                </div>
                            ) : (
                                <Link to={`/grade/${grade.id}`} className="lesson-card">
                                    <div className="card-image" style={{ backgroundImage: `url(${grade.img})` }}>
                                        <div className="card-icon-overlay">{grade.icon}</div>
                                    </div>
                                    <div className="card-content">
                                        <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase' }}>Nivel Activo</span>
                                        <h3>{grade.name}</h3>
                                        <p>{grade.desc}</p>
                                    </div>
                                    <div className="card-footer">
                                        <span className="status-tag status-available">Disponible</span>
                                        <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.8rem' }}>ENTRAR →</span>
                                    </div>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ padding: '4rem 0', background: 'white' }}>
                <div className="container" style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>¿Por qué estudiar con nosotros?</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ minWidth: '50px', height: '50px', background: '#eff6ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🎯</div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Aprendizaje Interactivo</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Juegos y cuestionarios que hacen que la historia cobre vida.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ minWidth: '50px', height: '50px', background: '#f0fdf4', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🛡️</div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Contenido Seguro</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Material verificado por expertos y apropiado para cada edad.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ flex: '1', minWidth: '300px', height: '400px', background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', boxShadow: '20px 20px 60px #d1d9e6' }}>
                        🌍
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
