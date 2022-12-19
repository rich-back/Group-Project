import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {

  test('renders app name somewhere', () => {
      render(<App />);
      const appName = screen.getByText(/element_able/i);
      expect(appName).toBeInTheDocument();
  });

  test('has link to welcome', () => {
      render(<App />);
      const welcomeLink = screen.getByText(/Welcome Page/i, { selector: 'a' });
      expect(welcomeLink).toBeInTheDocument();
  });

  test('has link to periodic table', () => {
      render(<App />);
      const welcomeLink = screen.getByText(/Periodic Table/i, { selector: 'a' });
      expect(welcomeLink).toBeInTheDocument();
      expect(welcomeLink).toHaveAttribute('href', expect.stringContaining('periodictable'));
  });

  test('has link to quiz', () => {
      render(<App />);
      const welcomeLink = screen.getByText(/Quiz/i, { selector: 'a' });
      expect(welcomeLink).toBeInTheDocument();
      expect(welcomeLink).toHaveAttribute('href', expect.stringContaining('quiz'));
  });
});