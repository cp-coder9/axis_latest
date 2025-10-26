import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ClientCalendarPage from './ClientCalendarPage';

describe('ClientCalendarPage', () => {
  it('renders the client calendar page', () => {
    render(
      <MemoryRouter>
        <ClientCalendarPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Calendar/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
