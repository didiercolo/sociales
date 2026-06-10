import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import SubjectHome from '../pages/SubjectHome';

describe('SubjectHome', () => {
  const renderAt = (path) => render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/:subject" element={<SubjectHome />} />
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </MemoryRouter>
  );

  it('renders the subject label as h1 for sociales', () => {
    renderAt('/sociales');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Estudios Sociales');
  });

  it('renders bloque headings for sociales', () => {
    renderAt('/sociales');
    expect(screen.getByText(/Geografía e Historia/)).toBeInTheDocument();
    expect(screen.getByText(/Educación Cívica/)).toBeInTheDocument();
  });

  it('renders lesson cards with LECCIÓN prefix', () => {
    renderAt('/sociales');
    // LessonCard renders "LECCIÓN 1", "LECCIÓN 2" etc.
    expect(screen.getAllByText(/LECCIÓN \d+/).length).toBeGreaterThan(0);
  });

  it('shows lesson count in hero', () => {
    renderAt('/sociales');
    expect(screen.getByText(/lecciones disponibles/)).toBeInTheDocument();
  });

  it('renders back link to /', () => {
    renderAt('/sociales');
    const links = screen.getAllByRole('link');
    const backLink = links.find(l => l.getAttribute('href') === '/');
    expect(backLink).toBeTruthy();
  });

  it('renders ciencias subject correctly', () => {
    renderAt('/ciencias');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Ciencias');
  });
});
