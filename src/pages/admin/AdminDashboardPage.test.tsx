import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import AdminDashboardPage from './AdminDashboardPage';

describe('AdminDashboardPage', () => {
  it('renders the admin dashboard', () => {
    render(
      <MemoryRouter>
        <AdminDashboardPage />
      </MemoryRouter>
    );
    const dashboardTitle = screen.getByRole('heading', { name: /Admin Dashboard/i });
    expect(dashboardTitle).toBeInTheDocument();
  });
});
