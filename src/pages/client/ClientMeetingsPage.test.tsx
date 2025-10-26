import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ClientMeetingsPage from './ClientMeetingsPage';

describe('ClientMeetingsPage', () => {
  it('renders the client meetings page', () => {
    render(
      <MemoryRouter>
        <ClientMeetingsPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Meetings/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
