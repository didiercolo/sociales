// src/tests/DailyQuestionPage.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import DailyQuestionPage from '../pages/DailyQuestionPage';

vi.mock('../components/DailyQuestion', () => ({
  default: () => <div data-testid="daily-question" />,
}));

const renderPage = () =>
  render(
    <MemoryRouter>
      <DailyQuestionPage />
    </MemoryRouter>
  );

describe('DailyQuestionPage', () => {
  it('renders back link with text "Inicio" pointing to "/"', () => {
    renderPage();
    const link = screen.getByRole('link', { name: /Inicio/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });

  it('renders h1 heading containing "Pregunta del Día"', () => {
    renderPage();
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(/Pregunta del Día/i);
  });

  it('renders the subtitle paragraph', () => {
    renderPage();
    expect(
      screen.getByText(/Responde la pregunta de hoy y gana puntos/i)
    ).toBeInTheDocument();
  });

  it('renders the DailyQuestion component', () => {
    renderPage();
    expect(screen.getByTestId('daily-question')).toBeInTheDocument();
  });
});
