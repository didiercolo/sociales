import React from 'react';
import { Link } from 'react-router-dom';

const LessonCard = ({ id, title, description, disabled, gradeId, imageUrl, subject }) => {
    const cardImage = imageUrl || `https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=500&auto=format&fit=crop`;

    if (disabled) {
        return (
            <div className="lesson-card disabled">
                <div className="card-image" style={{ backgroundImage: `url(${cardImage})` }}>
                    <div className="card-icon-overlay">🔒</div>
                </div>
                <div className="card-content">
                    <h3>Lección {id}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-footer">
                    <span className="status-tag">No disponible</span>
                </div>
            </div>
        );
    }

    return (
        <Link to={`/${subject}/grade/${gradeId}/lesson/${id}`} className="lesson-card">
            <div className="card-image" style={{ backgroundImage: `url(${cardImage})` }}>
                <div className="card-icon-overlay">📚</div>
            </div>
            <div className="card-content">
                <h3>Lección {id}</h3>
                <p>{description}</p>
            </div>
            <div className="card-footer">
                <span className="status-tag status-available">Disponible</span>
                <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.8rem' }}>ENTRAR →</span>
            </div>
        </Link>
    );
};

export default LessonCard;
