import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';

describe('Home Page', () => {
  it('renders home page correctly', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText(/Domina tus Materias con EduPortal CR/i)).toBeInTheDocument();
  });

  it('contains links to grade 6', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Use getAllByText and pick the one with the correct href
    const grade6Headings = screen.getAllByText('6to Grado');
    const link = grade6Headings.find(h => h.closest('a')?.getAttribute('href') === '/sociales/grade/6')?.closest('a');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/sociales/grade/6');
  });

  it('scrolls to grades section when clicking beginning button', () => {
    const scrollMock = vi.fn();
    const mockElement = { scrollIntoView: scrollMock };
    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement);

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/Comenzar a Estudiar/i));
    expect(scrollMock).toHaveBeenCalled();
    
    document.getElementById.mockRestore();
  });
});
