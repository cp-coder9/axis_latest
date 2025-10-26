import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import FreelancerNotificationsPage from './FreelancerNotificationsPage';

describe('FreelancerNotificationsPage', () => {
  it('renders the freelancer notifications page', () => {
    render(
      <MemoryRouter>
        <FreelancerNotificationsPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Notifications/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
