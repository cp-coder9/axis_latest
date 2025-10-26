import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import TeamPage from './TeamPage';
import { getDocs, collection } from 'firebase/firestore';

vi.mock('firebase/firestore');
vi.mock('../../firebase', () => ({
  db: {},
}));

const mockUsers = [
  { id: '1', name: 'Alice', role: 'Admin' },
  { id: '2', name: 'Bob', role: 'Freelancer' },
];

describe('TeamPage', () => {
  it('fetches and displays users', async () => {
    (getDocs as jest.Mock).mockResolvedValue({
      docs: mockUsers.map(user => ({ id: user.id, data: () => ({ name: user.name, role: user.role }) })),
    });
    (collection as jest.Mock).mockReturnValue({});

    render(
      <MemoryRouter>
        <TeamPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Alice')).toBeInTheDocument();
      expect(screen.getByText('Role: Admin')).toBeInTheDocument();
      expect(screen.getByText('Bob')).toBeInTheDocument();
      expect(screen.getByText('Role: Freelancer')).toBeInTheDocument();
    });
  });
});
