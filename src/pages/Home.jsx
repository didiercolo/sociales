import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const grades = [
        { id: 4, name: '4to Grado', status: 'Disponible', disabled: false },
        { id: 5, name: '5to Grado', status: 'Disponible', disabled: false },
        { id: 6, name: '6to Grado', status: 'Disponible', disabled: false },
        { id: 'resumen', name: 'Resumen General', status: 'Disponible', disabled: false }
    ];

    return (
        <div className="grades-selection">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--primary-color)', fontSize: '2.2rem' }}>
                Selecciona tu Grado
            </h2>
            <div className="lessons-grid">
                {grades.map(grade => (
                    <div key={grade.id} className={`lesson-card ${grade.disabled ? 'disabled' : ''}`}>
                        {grade.disabled ? (
                            <div style={{ width: '100%' }}>
                                <div className="card-icon">{grade.id}</div>
                                <div className="card-content">
                                    <h2>{grade.name}</h2>
                                    <p>{grade.status}</p>
                                </div>
                            </div>
                        ) : (
                            <Link to={`/grade/${grade.id}`} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                                <div className="card-icon">{grade.id}</div>
                                <div className="card-content">
                                    <h2>{grade.name}</h2>
                                    <p>{grade.status}</p>
                                    <span className="btn">Entrar</span>
                                </div>
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
