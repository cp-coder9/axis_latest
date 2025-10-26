import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ClientCompletedProjectsPage from './ClientCompletedProjectsPage';

describe('ClientCompletedProjectsPage', () => {
  it('renders the client completed projects page', () => {
    render(
      <MemoryRouter>
        <ClientCompletedProjectsPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Completed Projects/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
