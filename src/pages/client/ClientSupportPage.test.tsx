import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ClientSupportPage from './ClientSupportPage';

describe('ClientSupportPage', () => {
  it('renders the client support page', () => {
    render(
      <MemoryRouter>
        <ClientSupportPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Support/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
