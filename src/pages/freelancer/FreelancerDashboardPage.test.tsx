import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import FreelancerDashboardPage from './FreelancerDashboardPage';

describe('FreelancerDashboardPage', () => {
  it('renders the freelancer dashboard', () => {
    render(
      <MemoryRouter>
        <FreelancerDashboardPage />
      </MemoryRouter>
    );
    const dashboardTitle = screen.getByRole('heading', { name: /Freelancer Dashboard/i });
    expect(dashboardTitle).toBeInTheDocument();
  });
});
