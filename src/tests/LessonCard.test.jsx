import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import LessonCard from '../components/LessonCard';

describe('LessonCard component', () => {
  const defaultProps = {
    id: 1,
    title: 'Test Lesson',
    description: 'Test Description',
    gradeId: 6,
    subject: 'sociales',
  };

  it('renders correctly when enabled', () => {
    render(
      <MemoryRouter>
        <LessonCard {...defaultProps} />
      </MemoryRouter>
    );

    expect(screen.getByText('Lección 1')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Disponible')).toBeInTheDocument();
    expect(screen.getByText(/ENTRAR/)).toBeInTheDocument();
  });

  it('renders correctly when disabled', () => {
    render(
      <MemoryRouter>
        <LessonCard {...defaultProps} disabled={true} />
      </MemoryRouter>
    );

    expect(screen.getByText('Lección 1')).toBeInTheDocument();
    expect(screen.getByText('Próximamente')).toBeInTheDocument();
    expect(screen.queryByText(/ENTRAR/)).not.toBeInTheDocument();
    expect(document.querySelector('.lesson-card.disabled')).toBeInTheDocument();
  });

  it('navigates to the correct URL when enabled', () => {
    render(
      <MemoryRouter>
        <LessonCard {...defaultProps} />
      </MemoryRouter>
    );

    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('/sociales/grade/6/lesson/1');
  });

  it('navigates to coming-soon when disabled', () => {
    render(
      <MemoryRouter>
        <LessonCard {...defaultProps} disabled={true} />
      </MemoryRouter>
    );

    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('/coming-soon');
  });
});
