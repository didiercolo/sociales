import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import LessonsList from './pages/LessonsList';
import LessonView from './pages/LessonView';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="grade/:gradeId" element={<LessonsList />} />
                <Route path="grade/:gradeId/lesson/:lessonId" element={<LessonView />} />
            </Route>
        </Routes>
    );
}

export default App;
