import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import FreelancerEarningsOverviewPage from './FreelancerEarningsOverviewPage';

describe('FreelancerEarningsOverviewPage', () => {
  it('renders the freelancer earnings overview page', () => {
    render(
      <MemoryRouter>
        <FreelancerEarningsOverviewPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Earnings Overview/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
