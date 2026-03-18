import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import About from '../pages/About';
import ComingSoon from '../pages/ComingSoon';

describe('Simple Pages', () => {
  it('renders About page correctly', () => {
    render(<MemoryRouter><About /></MemoryRouter>);
    expect(screen.getByText(/Nuestra historia/i)).toBeInTheDocument();
  });

  it('renders ComingSoon page correctly', () => {
    render(<MemoryRouter><ComingSoon /></MemoryRouter>);
    expect(screen.getByText(/Expandimos el Portal/i)).toBeInTheDocument();
  });
});
