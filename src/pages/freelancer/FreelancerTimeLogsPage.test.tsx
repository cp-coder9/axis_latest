import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import FreelancerTimeLogsPage from './FreelancerTimeLogsPage';

describe('FreelancerTimeLogsPage', () => {
  it('renders the freelancer time logs page', () => {
    render(
      <MemoryRouter>
        <FreelancerTimeLogsPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Time Logs/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
