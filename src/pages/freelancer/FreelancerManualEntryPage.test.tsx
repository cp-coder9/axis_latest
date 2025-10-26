import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import FreelancerManualEntryPage from './FreelancerManualEntryPage';

describe('FreelancerManualEntryPage', () => {
  it('renders the freelancer manual entry page', () => {
    render(
      <MemoryRouter>
        <FreelancerManualEntryPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Manual Time Entry/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
