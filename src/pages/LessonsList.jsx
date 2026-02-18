import React from 'react';
import { useParams, Link } from 'react-router-dom';
import LessonCard from '../components/LessonCard';
import { lessonsData } from '../data/lessonsData';

const LessonsList = () => {
    const { gradeId } = useParams();
    const lessons = lessonsData[gradeId] || [];

    return (
        <div className="lessons-list-view">
            <Link to="/" className="back-link">⬅ Volver a Grados</Link>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--primary-color)', fontSize: '2.2rem' }}>
                Lecciones de {gradeId}to Grado
            </h2>

            <div className="lessons-grid">
                {lessons.length > 0 ? (
                    lessons.map(lesson => (
                        <LessonCard
                            key={lesson.id}
                            id={lesson.id}
                            title={lesson.title}
                            description={lesson.description}
                            gradeId={gradeId}
                        />
                    ))
                ) : (
                    <p style={{ textAlign: 'center', gridColumn: '1 / -1' }}>No hay lecciones disponibles para este grado aún.</p>
                )}
            </div>
        </div>
    );
};

export default LessonsList;
