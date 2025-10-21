import { render, screen, fireEvent } from '@testing-library/react';
import Timer from '../components/timer/Timer';
import { act } from 'react';
import { vi } from 'vitest';

test('renders Timer component and verifies functionality', () => {
  vi.useFakeTimers();
  render(<Timer />);

  // Initial state
  expect(screen.getByText('00:00:00')).toBeInTheDocument();

  // Start the timer
  fireEvent.click(screen.getByText(/Start/i));
  act(() => {
    vi.advanceTimersByTime(1000);
  });
  expect(screen.getByText('00:00:01')).toBeInTheDocument();

  // Stop the timer
  fireEvent.click(screen.getByText(/Stop/i));
  act(() => {
    vi.advanceTimersByTime(1000);
  });
  expect(screen.getByText('00:00:01')).toBeInTheDocument();

  // Reset the timer
  fireEvent.click(screen.getByText(/Reset/i));
  expect(screen.getByText('00:00:00')).toBeInTheDocument();
});
