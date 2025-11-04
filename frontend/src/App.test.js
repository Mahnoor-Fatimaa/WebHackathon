import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders Admin Dashboard', () => {
  render(
    <MemoryRouter initialEntries={['/admin']}>
      <App />
    </MemoryRouter>
  );

  const dashboardHeading = screen.getByText(/Dashboard/i);
  expect(dashboardHeading).toBeInTheDocument();
});
