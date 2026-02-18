import React from 'react';
import { Link } from 'react-router-dom';

const LessonCard = ({ id, title, description, disabled, gradeId }) => {
    if (disabled) {
        return (
            <div className="lesson-card disabled">
                <div className="card-icon">{id}</div>
                <div className="card-content">
                    <h2>Lección {id}</h2>
                    <p>{description}</p>
                </div>
            </div>
        );
    }

    return (
        <Link to={`/grade/${gradeId}/lesson/${id}`} className="lesson-card">
            <div className="card-icon">{id}</div>
            <div className="card-content">
                <h2>Lección {id}</h2>
                <p>{description}</p>
                <span className="btn">Empezar Lección</span>
            </div>
        </Link>
    );
};

export default LessonCard;
