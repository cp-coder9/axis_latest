import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ReportsPage from './ReportsPage';

describe('ReportsPage', () => {
  it('renders the reports page', () => {
    render(
      <MemoryRouter>
        <ReportsPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Reports/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
