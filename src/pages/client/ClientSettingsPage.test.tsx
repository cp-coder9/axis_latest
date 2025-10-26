import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ClientSettingsPage from './ClientSettingsPage';

describe('ClientSettingsPage', () => {
  it('renders the client settings page', () => {
    render(
      <MemoryRouter>
        <ClientSettingsPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Settings/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
