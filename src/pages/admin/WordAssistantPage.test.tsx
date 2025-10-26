import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import WordAssistantPage from './WordAssistantPage';

describe('WordAssistantPage', () => {
  it('renders the word assistant page', () => {
    render(
      <MemoryRouter>
        <WordAssistantPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Word Assistant/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
