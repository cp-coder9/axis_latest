import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ClientActivityPage from './ClientActivityPage';

describe('ClientActivityPage', () => {
  it('renders the client activity page', () => {
    render(
      <MemoryRouter>
        <ClientActivityPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Activity/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
