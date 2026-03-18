import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import SubjectSelection from '../pages/SubjectSelection';

describe('SubjectSelection Page', () => {
  it('renders subjects correctly', () => {
    render(<MemoryRouter><SubjectSelection /></MemoryRouter>);
    expect(screen.getByText('Ciencias')).toBeInTheDocument();
    expect(screen.getByText('Estudios Sociales')).toBeInTheDocument();
    expect(screen.getByText('Español')).toBeInTheDocument();
  });

  it('scrolls to subjects section when clicking CTA', () => {
    const scrollMock = vi.fn();
    const mockElement = { scrollIntoView: scrollMock };
    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement);

    render(<MemoryRouter><SubjectSelection /></MemoryRouter>);
    
    // Using a more robust text match
    fireEvent.click(screen.getByText(/Comenzar a Aprender/i));
    expect(scrollMock).toHaveBeenCalled();
    
    document.getElementById.mockRestore();
  });
});
