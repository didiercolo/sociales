import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import LessonsList from '../pages/LessonsList';
import LessonView from '../pages/LessonView';

beforeEach(() => {
  window.HTMLElement.prototype.scrollIntoView = vi.fn();
});

describe('Lessons Interaction Pages', () => {
  it('renders LessonsList for sociales grade 6', () => {
    render(
      <MemoryRouter initialEntries={['/sociales/grade/6']}>
        <Routes>
          <Route path="/:subject/grade/:gradeId" element={<LessonsList />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getAllByText(/6to Grado/i).length).toBeGreaterThan(0);
  });

  it('handles LessonView for a specific lesson', () => {
    render(
      <MemoryRouter initialEntries={['/sociales/grade/6/lesson/1']}>
        <Routes>
          <Route path="/:subject/grade/:gradeId/lesson/:lessonId" element={<LessonView />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('redirects if lesson does not exist', () => {
    render(
      <MemoryRouter initialEntries={['/sociales/grade/6/lesson/999']}>
        <Routes>
          <Route path="/:subject/grade/:gradeId/lesson/:lessonId" element={<LessonView />} />
          <Route path="/:subject/grade/:gradeId" element={<div>Redirected</div>} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/Redirected/i)).toBeInTheDocument();
  });

  it('redirects if lesson is disabled', () => {
    // Lesson 2 is disabled in data
    render(
      <MemoryRouter initialEntries={['/sociales/grade/6/lesson/2']}>
        <Routes>
          <Route path="/:subject/grade/:gradeId/lesson/:lessonId" element={<LessonView />} />
          <Route path="/coming-soon" element={<div>Coming Soon Page</div>} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/Coming Soon Page/i)).toBeInTheDocument();
  });

  it('handles mouse enter/leave on extra material link', () => {
     render(
      <MemoryRouter initialEntries={['/sociales/grade/6/lesson/1']}>
        <Routes>
          <Route path="/:subject/grade/:gradeId/lesson/:lessonId" element={<LessonView />} />
        </Routes>
      </MemoryRouter>
    );
    
    // extraMaterial section is only for lesson 1 in sociales
    const link = screen.getByText(/📥/i).closest('a');
    fireEvent.mouseOver(link);
    fireEvent.mouseOut(link);
  });
});
