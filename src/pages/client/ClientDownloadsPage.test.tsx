import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ClientDownloadsPage from './ClientDownloadsPage';

describe('ClientDownloadsPage', () => {
  it('renders the client downloads page', () => {
    render(
      <MemoryRouter>
        <ClientDownloadsPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Downloads/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
