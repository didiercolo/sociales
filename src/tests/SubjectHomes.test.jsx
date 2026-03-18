import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import CienciasHome from '../pages/CienciasHome';
import EspanolHome from '../pages/EspanolHome';

describe('Subject Home Pages', () => {
  it('renders CienciasHome correctly', () => {
    // Mock scrollIntoView
    const scrollMock = vi.fn();
    const mockElement = { scrollIntoView: scrollMock };
    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement);

    render(<MemoryRouter><CienciasHome /></MemoryRouter>);
    expect(screen.getByText(/¡Bienvenido a tu aventura Científica!/i)).toBeInTheDocument();
    
    fireEvent.click(screen.getByText(/Ver Grados/i));
    expect(scrollMock).toHaveBeenCalled();
    document.getElementById.mockRestore();
  });

  it('renders EspanolHome correctly', () => {
    render(<MemoryRouter><EspanolHome /></MemoryRouter>);
    expect(screen.getByText(/Lectura, escritura y comunicación/i)).toBeInTheDocument();
    expect(screen.getByText(/Sexto Grado/i)).toBeInTheDocument();
  });
});
