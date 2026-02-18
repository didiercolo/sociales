import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { lessonsData } from '../data/lessonsData';
import Quiz from '../components/Quiz';

const LessonView = () => {
    const { gradeId, lessonId } = useParams();
    const gradeLessons = lessonsData[gradeId] || [];
    const lesson = gradeLessons.find(l => l.id.toString() === lessonId);

    if (!lesson) {
        return <Navigate to={`/grade/${gradeId}`} replace />;
    }

    return (
        <div className="lesson-view">
            <Link to={`/grade/${gradeId}`} className="back-link">⬅ Volver a Lecciones</Link>

            <div className="lesson-header">
                <h1>{lesson.title}</h1>
            </div>

            {lesson.sections.map((section, index) => (
                <section key={index} className="content-section">
                    <h2>{section.title}</h2>

                    {section.content.map((block, i) => (
                        <div key={i} dangerouslySetInnerHTML={{ __html: block }} />
                    ))}

                    {section.videoId && (
                        <div className="video-container">
                            <iframe
                                src={`https://www.youtube.com/embed/${section.videoId}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </section>
            ))}

            {lesson.quiz && <Quiz questions={lesson.quiz} />}
        </div>
    );
};

export default LessonView;
