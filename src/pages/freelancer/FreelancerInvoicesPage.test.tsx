import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import FreelancerInvoicesPage from './FreelancerInvoicesPage';

describe('FreelancerInvoicesPage', () => {
  it('renders the freelancer invoices page', () => {
    render(
      <MemoryRouter>
        <FreelancerInvoicesPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Invoices/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
