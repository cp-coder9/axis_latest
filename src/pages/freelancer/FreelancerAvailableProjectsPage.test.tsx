import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import FreelancerAvailableProjectsPage from './FreelancerAvailableProjectsPage';

describe('FreelancerAvailableProjectsPage', () => {
  it('renders the freelancer available projects page', () => {
    render(
      <MemoryRouter>
        <FreelancerAvailableProjectsPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Available Projects/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
