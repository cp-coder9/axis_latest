import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import FreelancerSettingsPage from './FreelancerSettingsPage';

describe('FreelancerSettingsPage', () => {
  it('renders the freelancer settings page', () => {
    render(
      <MemoryRouter>
        <FreelancerSettingsPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Settings/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
