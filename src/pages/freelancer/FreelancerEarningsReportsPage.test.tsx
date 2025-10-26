import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import FreelancerEarningsReportsPage from './FreelancerEarningsReportsPage';

describe('FreelancerEarningsReportsPage', () => {
  it('renders the freelancer earnings reports page', () => {
    render(
      <MemoryRouter>
        <FreelancerEarningsReportsPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Earnings Reports/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
