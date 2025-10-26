import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import LifecyclePage from './LifecyclePage';

describe('LifecyclePage', () => {
  it('renders the lifecycle page', () => {
    render(
      <MemoryRouter>
        <LifecyclePage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Lifecycle Management/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
