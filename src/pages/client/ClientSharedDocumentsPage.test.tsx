import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ClientSharedDocumentsPage from './ClientSharedDocumentsPage';

describe('ClientSharedDocumentsPage', () => {
  it('renders the client shared documents page', () => {
    render(
      <MemoryRouter>
        <ClientSharedDocumentsPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Shared Documents/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
