import React from 'react';
import { Link } from 'react-router-dom';

const SubjectSelection = () => {
    const subjects = [
        {
            id: 'ciencias',
            name: 'Ciencias',
            desc: 'Explora el mundo natural, los seres vivos y la materia.',
            icon: '🧪',
            color: '#3498DB',
            status: 'Próximamente',
            disabled: true
        },
        {
            id: 'sociales',
            name: 'Estudios Sociales',
            desc: 'Descubre la geografía, historia y cultura de Costa Rica.',
            icon: '🌍',
            color: '#2ECC71',
            status: 'Disponible',
            disabled: false,
            link: '/sociales'
        },
        {
            id: 'matematicas',
            name: 'Matemáticas',
            desc: 'Domina los números, las formas y el razonamiento lógico.',
            icon: '📐',
            color: '#9B59B6',
            status: 'Próximamente',
            disabled: true
        },
        {
            id: 'espanol',
            name: 'Español',
            desc: 'Fortalece tu lectura, escritura y comunicación.',
            icon: '📚',
            color: '#E67E22',
            status: 'Próximamente',
            disabled: true
        }
    ];

    return (
        <div className="subject-selection-page">
            <section className="hero">
                <div className="container">
                    <span className="badge">Plataforma Educativa</span>
                    <h2>¡Elige tu materia y comienza a aprender!</h2>
                    <p>Selecciona el área de estudio que deseas explorar hoy. Aventuras interactivas te esperan.</p>
                </div>
            </section>

            <section className="container" style={{ padding: '4rem 0' }}>
                <div className="lessons-grid">
                    {subjects.map(subject => (
                        <div key={subject.id}>
                            {subject.disabled ? (
                                <div className="lesson-card disabled">
                                    <div className="card-image" style={{ background: `linear-gradient(135deg, ${subject.color}44 0%, ${subject.color} 100%)` }}>
                                        <div className="card-icon-overlay">{subject.icon}</div>
                                    </div>
                                    <div className="card-content">
                                        <h3>{subject.name}</h3>
                                        <p>{subject.desc}</p>
                                    </div>
                                    <div className="card-footer">
                                        <span className="status-tag">Disponible pronto</span>
                                    </div>
                                </div>
                            ) : (
                                <Link to={subject.link} className="lesson-card">
                                    <div className="card-image" style={{ background: `linear-gradient(135deg, ${subject.color}44 0%, ${subject.color} 100%)` }}>
                                        <div className="card-icon-overlay">{subject.icon}</div>
                                    </div>
                                    <div className="card-content">
                                        <span style={{ color: subject.color, fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase' }}>Materia Activa</span>
                                        <h3>{subject.name}</h3>
                                        <p>{subject.desc}</p>
                                    </div>
                                    <div className="card-footer">
                                        <span className="status-tag status-available">Disponible</span>
                                        <span style={{ color: subject.color, fontWeight: '700', fontSize: '0.8rem' }}>ENTRAR →</span>
                                    </div>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SubjectSelection;
