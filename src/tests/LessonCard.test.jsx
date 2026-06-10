import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import LessonCard from '../components/LessonCard';

describe('LessonCard component', () => {
  const defaultProps = {
    id: 'costa-rica-y-su-geografia',
    title: 'Costa Rica y su Geografía',
    description: 'Test Description',
    subject: 'sociales',
    bloqueColor: '#0284c7',
    lessonNumber: 1,
  };

  it('renders lesson number with LECCIÓN prefix', () => {
    render(
      <MemoryRouter>
        <LessonCard {...defaultProps} />
      </MemoryRouter>
    );

    expect(screen.getByText(/LECCIÓN 1/)).toBeInTheDocument();
  });

  it('renders title', () => {
    render(
      <MemoryRouter>
        <LessonCard {...defaultProps} />
      </MemoryRouter>
    );

    expect(screen.getByText('Costa Rica y su Geografía')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(
      <MemoryRouter>
        <LessonCard {...defaultProps} />
      </MemoryRouter>
    );

    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('does not render description when omitted', () => {
    const { description, ...propsWithoutDescription } = defaultProps;
    render(
      <MemoryRouter>
        <LessonCard {...propsWithoutDescription} />
      </MemoryRouter>
    );

    expect(screen.queryByText('Test Description')).not.toBeInTheDocument();
  });

  it('links to /:subject/lesson/:id', () => {
    render(
      <MemoryRouter>
        <LessonCard {...defaultProps} />
      </MemoryRouter>
    );

    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('/sociales/lesson/costa-rica-y-su-geografia');
  });
});
