import React from 'react';
import { Link } from 'react-router-dom';

const LessonCard = ({ id, title, description, subject, bloqueColor, lessonNumber }) => (
    <Link to={`/${subject}/lesson/${id}`} className="lesson-card">
        <div className="card-content">
            <div style={{ color: bloqueColor, fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                LECCIÓN {lessonNumber}
            </div>
            <h3>{title}</h3>
            {description && <p>{description}</p>}
        </div>
        <div className="card-footer">
            <span className="status-tag status-available">Disponible</span>
            <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.8rem' }}>ENTRAR →</span>
        </div>
    </Link>
);

export default LessonCard;
