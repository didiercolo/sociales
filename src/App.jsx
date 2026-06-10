import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { AuthProvider } from './context/AuthContext';

const SubjectSelection = lazy(() => import('./pages/SubjectSelection'));
const SubjectHome = lazy(() => import('./pages/SubjectHome'));
const LessonView = lazy(() => import('./pages/LessonView'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));
const About = lazy(() => import('./pages/About'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const ScoreboardPage = lazy(() => import('./pages/ScoreboardPage'));
const Simulacro = lazy(() => import('./pages/Simulacro'));

const PageLoader = () => (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'var(--font-heading)', color: 'var(--primary-color)' }}>
        <h2>Cargando... 📚</h2>
    </div>
);

function App() {
    return (
        <AuthProvider>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<SubjectSelection />} />
                        <Route path=":subject" element={<SubjectHome />} />
                        <Route path=":subject/lesson/:lessonId" element={<LessonView />} />
                        <Route path="coming-soon" element={<ComingSoon />} />
                        <Route path="sobre-nosotros" element={<About />} />
                        <Route path="registro" element={<Register />} />
                        <Route path="login" element={<Login />} />
                        <Route path="scoreboard" element={<ScoreboardPage />} />
                        <Route path="simulacro/:subject" element={<Simulacro />} />
                    </Route>
                </Routes>
            </Suspense>
        </AuthProvider>
    );
}

export default App;
