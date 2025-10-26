import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import AnalyticsPage from './AnalyticsPage';

describe('AnalyticsPage', () => {
  it('renders the analytics page', () => {
    render(
      <MemoryRouter>
        <AnalyticsPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Analytics/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
