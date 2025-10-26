import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ClientNotificationsPage from './ClientNotificationsPage';

describe('ClientNotificationsPage', () => {
  it('renders the client notifications page', () => {
    render(
      <MemoryRouter>
        <ClientNotificationsPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Notifications/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
