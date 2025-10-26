import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import SettingsPage from './SettingsPage';

describe('SettingsPage', () => {
  it('renders the settings page', () => {
    render(
      <MemoryRouter>
        <SettingsPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /Settings/i });
    expect(pageTitle).toBeInTheDocument();
  });
});
