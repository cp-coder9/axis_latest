import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ClientDashboardPage from './ClientDashboardPage';

describe('ClientDashboardPage', () => {
  it('renders the client dashboard', () => {
    render(
      <MemoryRouter>
        <ClientDashboardPage />
      </MemoryRouter>
    );
    const dashboardTitle = screen.getByRole('heading', { name: /Client Dashboard/i });
    expect(dashboardTitle).toBeInTheDocument();
  });
});
