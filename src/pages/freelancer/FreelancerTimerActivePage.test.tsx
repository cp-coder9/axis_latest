import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import FreelancerTimerActivePage from './FreelancerTimerActivePage';

describe('FreelancerTimerActivePage', () => {
  it('renders the freelancer timer active page', () => {
    render(
      <MemoryRouter>
        <FreelancerTimerActivePage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Active Timer/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
