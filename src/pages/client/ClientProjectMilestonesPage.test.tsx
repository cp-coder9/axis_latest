import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ClientProjectMilestonesPage from './ClientProjectMilestonesPage';

describe('ClientProjectMilestonesPage', () => {
  it('renders the client project milestones page', () => {
    render(
      <MemoryRouter>
        <ClientProjectMilestonesPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Project Milestones/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
