import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import FreelancerProfilePage from './FreelancerProfilePage';

describe('FreelancerProfilePage', () => {
  it('renders the freelancer profile page', () => {
    render(
      <MemoryRouter>
        <FreelancerProfilePage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Profile/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
