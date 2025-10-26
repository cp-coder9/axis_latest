import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ClientTeamContactsPage from './ClientTeamContactsPage';

describe('ClientTeamContactsPage', () => {
  it('renders the client team contacts page', () => {
    render(
      <MemoryRouter>
        <ClientTeamContactsPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Team Contacts/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
