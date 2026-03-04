import React from 'react';
import { Link } from 'react-router-dom';

const CienciasHome = () => {
    const grades = [
        {
            id: 4,
            name: '4to Grado',
            status: 'Próximamente',
            disabled: true,
            desc: 'Aprende los conceptos básicos del mundo natural.',
            img: 'https://images.unsplash.com/photo-1564325724739-bae0bd08762c?q=80&w=500&auto=format&fit=crop',
            icon: '🌱'
        },
        {
            id: 5,
            name: '5to Grado',
            status: 'Próximamente',
            disabled: true,
            desc: 'Descubre cómo funciona el cuerpo humano y ecosistemas.',
            img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=500&auto=format&fit=crop',
            icon: '🧬'
        },
        {
            id: 6,
            name: '6to Grado',
            status: 'Disponible',
            disabled: false,
            desc: 'Explora fuerzas, masa, peso, gravedad y el sistema solar.',
            img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500&auto=format&fit=crop',
            icon: '🔭'
        }
    ];

    return (
        <div className="home-page">
            <section className="hero" style={{ background: 'radial-gradient(circle at top right, rgba(52, 152, 219, 0.15), transparent), radial-gradient(circle at bottom left, rgba(155, 89, 182, 0.05), transparent)' }}>
                <div className="container">
                    <Link to="/" style={{ textDecoration: 'none', color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'inline-block' }}>← Volver a Materias</Link>
                    <br />
                    <span className="badge" style={{ background: '#3498db22', color: '#3498db' }}>Ciencias</span>
                    <h2>¡Bienvenido a tu aventura Científica!</h2>
                    <p>Explora el espacio, la materia y la física de una manera divertida, interactiva y moderna.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button
                            onClick={() => document.getElementById('grados')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-primary"
                            style={{ background: '#3498db', borderColor: '#3498db' }}
                        >
                            Ver Grados
                        </button>
                    </div>
                </div>
            </section>

            <section id="grados" className="container" style={{ padding: '4rem 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--bg-dark)' }}>Selecciona tu Grado</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Elige tu nivel para comenzar a explorar contenidos de ciencias</p>
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
                                        <span className="status-tag">{grade.status}</span>
                                    </div>
                                </div>
                            ) : (
                                <Link to={`/ciencias/grade/${grade.id}`} className="lesson-card">
                                    <div className="card-image" style={{ backgroundImage: `url(${grade.img})` }}>
                                        <div className="card-icon-overlay">{grade.icon}</div>
                                    </div>
                                    <div className="card-content">
                                        <span style={{ color: '#3498db', fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase' }}>Nivel Activo</span>
                                        <h3>{grade.name}</h3>
                                        <p>{grade.desc}</p>
                                    </div>
                                    <div className="card-footer">
                                        <span className="status-tag status-available" style={{ background: '#3498db22', color: '#3498db' }}>Disponible</span>
                                        <span style={{ color: '#3498db', fontWeight: '700', fontSize: '0.8rem' }}>ENTRAR →</span>
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
                                <div style={{ minWidth: '50px', height: '50px', background: '#eff6ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🧪</div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Aprendizaje Interactivo</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Explicaciones claras y cuestionarios que hacen que la ciencia cobre vida.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ minWidth: '50px', height: '50px', background: '#f0fdf4', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🛡️</div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Contenido Confiable</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Material verificado basado en el resumen científico.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ flex: '1', minWidth: '300px', height: '400px', background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', boxShadow: '20px 20px 60px #d1d9e6' }}>
                        🌌
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CienciasHome;
