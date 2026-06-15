// Tests for LessonView with new flat routing
// Route: /:subject/lesson/:lessonId
// Real lesson from lessonsData: subject='sociales', id='costa-rica-y-su-geografia'

import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import LessonView from '../pages/LessonView';

beforeEach(() => {
  window.HTMLElement.prototype.scrollIntoView = vi.fn();
});

describe('LessonView', () => {
  it('renders lesson heading for a valid lesson', () => {
    render(
      <MemoryRouter initialEntries={['/sociales/lesson/costa-rica-y-su-geografia']}>
        <Routes>
          <Route path="/:subject/lesson/:lessonId" element={<LessonView />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders the back link to /:subject', () => {
    render(
      <MemoryRouter initialEntries={['/sociales/lesson/costa-rica-y-su-geografia']}>
        <Routes>
          <Route path="/:subject/lesson/:lessonId" element={<LessonView />} />
        </Routes>
      </MemoryRouter>
    );
    const backLink = screen.getByRole('link', { name: /volver a lecciones/i });
    expect(backLink).toHaveAttribute('href', '/sociales');
  });

  it('redirects to /:subject if lesson id not found', () => {
    render(
      <MemoryRouter initialEntries={['/sociales/lesson/nonexistent-lesson']}>
        <Routes>
          <Route path="/:subject/lesson/:lessonId" element={<LessonView />} />
          <Route path="/sociales" element={<div>Redirected</div>} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/Redirected/i)).toBeInTheDocument();
  });
});
