import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import SearchPage from './SearchPage';

describe('SearchPage', () => {
  it('renders the search page', () => {
    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Search/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
