import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ClientActiveProjectsPage from './ClientActiveProjectsPage';

describe('ClientActiveProjectsPage', () => {
  it('renders the client active projects page', () => {
    render(
      <MemoryRouter>
        <ClientActiveProjectsPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Active Projects/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
