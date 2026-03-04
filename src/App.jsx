import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy load pages for better initial performance
const Home = lazy(() => import('./pages/Home'));
const CienciasHome = lazy(() => import('./pages/CienciasHome'));
const SubjectSelection = lazy(() => import('./pages/SubjectSelection'));
const LessonsList = lazy(() => import('./pages/LessonsList'));
const LessonView = lazy(() => import('./pages/LessonView'));

// Loading fallback component
const PageLoader = () => (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'var(--font-heading)', color: 'var(--primary-color)' }}>
        <h2>Cargando... 📚</h2>
    </div>
);

function App() {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<SubjectSelection />} />
                    <Route path="sociales" element={<Home />} />
                    <Route path="ciencias" element={<CienciasHome />} />
                    <Route path=":subject/grade/:gradeId" element={<LessonsList />} />
                    <Route path=":subject/grade/:gradeId/lesson/:lessonId" element={<LessonView />} />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;
