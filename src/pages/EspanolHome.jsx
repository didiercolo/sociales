import React from 'react';
import { Link } from 'react-router-dom';

const EspanolHome = () => {
    return (
        <div className="home-page">
            <section className="hero" style={{ background: 'linear-gradient(135deg, var(--bg-main) 0%, #FFF5ED 100%)' }}>
                <div className="container">
                    <span className="badge" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>📚 Español</span>
                    <h2>Lectura, escritura y comunicación</h2>
                    <p>
                        Sumérgete en el mundo de las letras, la gramática y la expresión escrita.
                    </p>
                </div>
            </section>

            <section className="container" style={{ padding: '4rem 0' }}>
                <Link to="/" className="back-link" style={{ marginBottom: '2rem', display: 'inline-block' }}>
                    ← Volver a Materias
                </Link>

                <h3 style={{ marginBottom: '2rem', fontSize: '1.8rem', color: 'var(--bg-dark)' }}>Niveles Disponibles</h3>

                <div className="lessons-grid">
                    <div className="lesson-card disabled">
                        <div className="card-image" style={{ background: 'linear-gradient(135deg, var(--accent) 0%, transparent 100%)', opacity: 0.1 }}>
                            <div className="card-icon-overlay">4️⃣</div>
                        </div>
                        <div className="card-content">
                            <h3>Cuarto Grado</h3>
                            <p>Desarrollo de habilidades de lectura y expresión escrita básica.</p>
                        </div>
                        <div className="card-footer">
                            <span className="status-tag">No disponible aún</span>
                        </div>
                    </div>

                    <div className="lesson-card disabled">
                        <div className="card-image" style={{ background: 'linear-gradient(135deg, var(--accent) 0%, transparent 100%)', opacity: 0.1 }}>
                            <div className="card-icon-overlay">5️⃣</div>
                        </div>
                        <div className="card-content">
                            <h3>Quinto Grado</h3>
                            <p>Análisis de textos, gramática intermedia y reglas ortográficas.</p>
                        </div>
                        <div className="card-footer">
                            <span className="status-tag">No disponible aún</span>
                        </div>
                    </div>

                    <Link to="/espanol/grade/6" className="lesson-card">
                        <div className="card-image" style={{ background: 'linear-gradient(135deg, var(--accent) 0%, #D35400 100%)' }}>
                            <div className="card-icon-overlay">6️⃣</div>
                        </div>
                        <div className="card-content">
                            <h3>Sexto Grado</h3>
                            <p>Gramática avanzada, tipos de lenguaje y ortografía.</p>
                        </div>
                        <div className="card-footer">
                            <span className="status-tag status-available">Disponible</span>
                            <span style={{ color: 'var(--accent)', fontWeight: '700', fontSize: '0.8rem' }}>ENTRAR →</span>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default EspanolHome;
