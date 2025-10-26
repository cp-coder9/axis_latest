import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import DataLibraryPage from './DataLibraryPage';

describe('DataLibraryPage', () => {
  it('renders the data library page', () => {
    render(
      <MemoryRouter>
        <DataLibraryPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Data Library/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
