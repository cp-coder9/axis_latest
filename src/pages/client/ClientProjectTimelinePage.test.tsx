import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ClientProjectTimelinePage from './ClientProjectTimelinePage';

describe('ClientProjectTimelinePage', () => {
  it('renders the client project timeline page', () => {
    render(
      <MemoryRouter>
        <ClientProjectTimelinePage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Project Timeline/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
