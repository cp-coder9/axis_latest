import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import FreelancerAssignedProjectsPage from './FreelancerAssignedProjectsPage';

describe('FreelancerAssignedProjectsPage', () => {
  it('renders the freelancer assigned projects page', () => {
    render(
      <MemoryRouter>
        <FreelancerAssignedProjectsPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Assigned Projects/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
