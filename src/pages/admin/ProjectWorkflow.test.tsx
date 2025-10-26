import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ProjectWorkflow from './ProjectWorkflow';

describe('ProjectWorkflow', () => {
  it('renders the project workflow page', () => {
    render(
      <MemoryRouter>
        <ProjectWorkflow />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Projects/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
