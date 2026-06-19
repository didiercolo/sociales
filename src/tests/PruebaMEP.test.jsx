// src/tests/PruebaMEP.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import PruebaMEP from '../pages/PruebaMEP';

describe('PruebaMEP', () => {
  const renderPage = () => render(<MemoryRouter><PruebaMEP /></MemoryRouter>);

  it('renders the hero heading', () => {
    renderPage();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Prueba MEP/i);
  });

  it('shows exam format info', () => {
    renderPage();
    expect(screen.getByText(/120 minutos/)).toBeInTheDocument();
    expect(screen.getByText(/35 preguntas/)).toBeInTheDocument();
  });

  it('renders all 4 subject accordions', () => {
    renderPage();
    expect(screen.getByText('Estudios Sociales')).toBeInTheDocument();
    expect(screen.getByText('Ciencias')).toBeInTheDocument();
    expect(screen.getByText('Español')).toBeInTheDocument();
    expect(screen.getByText('Matemática')).toBeInTheDocument();
  });

  it('accordion is collapsed by default', () => {
    renderPage();
    expect(screen.queryByText(/Geografía e Historia/)).not.toBeInTheDocument();
  });

  it('expands accordion when clicked and shows bloque list', () => {
    renderPage();
    fireEvent.click(screen.getByRole('button', { name: /Estudios Sociales/i }));
    expect(screen.getByText(/Geografía e Historia/)).toBeInTheDocument();
  });

  it('collapses when clicked again', () => {
    renderPage();
    fireEvent.click(screen.getByRole('button', { name: /Estudios Sociales/i }));
    fireEvent.click(screen.getByRole('button', { name: /Estudios Sociales/i }));
    expect(screen.queryByText(/Geografía e Historia/)).not.toBeInTheDocument();
  });

  it('shows Practicar Simulacro link inside expanded accordion', () => {
    renderPage();
    fireEvent.click(screen.getByRole('button', { name: /Estudios Sociales/i }));
    const link = screen.getByRole('link', { name: /Practicar Simulacro/i });
    expect(link.getAttribute('href')).toBe('/simulacro/sociales');
  });

  it('renders back link to /', () => {
    renderPage();
    const backLink = screen.getAllByRole('link').find(l => l.getAttribute('href') === '/');
    expect(backLink).toBeTruthy();
  });

  it('shows Exámenes Extra section inside expanded sociales accordion', () => {
    renderPage();
    fireEvent.click(screen.getByRole('button', { name: /Estudios Sociales/i }));
    expect(screen.getByText(/Exámenes Extra/i)).toBeInTheDocument();
  });

  it('shows links to the 3 extra exams inside expanded sociales accordion', () => {
    renderPage();
    fireEvent.click(screen.getByRole('button', { name: /Estudios Sociales/i }));
    const link1 = screen.getByRole('link', { name: /Examen Extra 1/i });
    const link2 = screen.getByRole('link', { name: /Examen Extra 2/i });
    const link3 = screen.getByRole('link', { name: /Examen Extra 3/i });
    expect(link1.getAttribute('href')).toBe('/simulacro-extra/sociales/1');
    expect(link2.getAttribute('href')).toBe('/simulacro-extra/sociales/2');
    expect(link3.getAttribute('href')).toBe('/simulacro-extra/sociales/3');
  });

  it('does NOT show extra exam links inside other subject accordions', () => {
    renderPage();
    fireEvent.click(screen.getByRole('button', { name: /Matemática/i }));
    expect(screen.queryByText(/Examen Extra 1/i)).not.toBeInTheDocument();
  });

  it('shows links to the 3 extra exams inside expanded ciencias accordion', () => {
    renderPage();
    fireEvent.click(screen.getByRole('button', { name: /Ciencias/i }));
    const link1 = screen.getByRole('link', { name: /Examen Extra 1/i });
    const link2 = screen.getByRole('link', { name: /Examen Extra 2/i });
    const link3 = screen.getByRole('link', { name: /Examen Extra 3/i });
    expect(link1.getAttribute('href')).toBe('/simulacro-extra/ciencias/1');
    expect(link2.getAttribute('href')).toBe('/simulacro-extra/ciencias/2');
    expect(link3.getAttribute('href')).toBe('/simulacro-extra/ciencias/3');
  });

  it('shows links to the 3 extra exams inside expanded espanol accordion', () => {
    renderPage();
    fireEvent.click(screen.getByRole('button', { name: /Español/i }));
    const link1 = screen.getByRole('link', { name: /Examen Extra 1/i });
    const link2 = screen.getByRole('link', { name: /Examen Extra 2/i });
    const link3 = screen.getByRole('link', { name: /Examen Extra 3/i });
    expect(link1.getAttribute('href')).toBe('/simulacro-extra/espanol/1');
    expect(link2.getAttribute('href')).toBe('/simulacro-extra/espanol/2');
    expect(link3.getAttribute('href')).toBe('/simulacro-extra/espanol/3');
  });
});
