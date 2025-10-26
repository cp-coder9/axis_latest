import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import HelpPage from './HelpPage';

describe('HelpPage', () => {
  it('renders the help page', () => {
    render(
      <MemoryRouter>
        <HelpPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Help & Support/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
