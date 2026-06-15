import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import SubjectHome from '../pages/SubjectHome';
import * as AuthContext from '../context/AuthContext';

vi.mock('../context/AuthContext', () => ({
  useAuth: vi.fn(() => ({ currentUser: null, userProfile: null })),
}));

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

  it('shows tier upsell banner for anonymous visitor', () => {
    renderAt('/sociales');
    expect(screen.getByText(/¿Querés más\?/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Ver planes/i })).toBeInTheDocument();
  });

  it('hides tier banner for tier-2+ user', () => {
    vi.mocked(AuthContext.useAuth).mockReturnValueOnce({
      currentUser: { uid: 'abc' },
      userProfile: { tier: 2, nickname: 'PowerUser' },
    });
    renderAt('/sociales');
    expect(screen.queryByText(/¿Querés más\?/i)).not.toBeInTheDocument();
    vi.mocked(AuthContext.useAuth).mockReturnValue({ currentUser: null, userProfile: null });
  });

  it('renders simulacro button linking to /simulacro/:subject', () => {
    renderAt('/sociales');
    const btn = screen.getByRole('link', { name: /Simulacro MEP/i });
    expect(btn.getAttribute('href')).toBe('/simulacro/sociales');
  });
});
