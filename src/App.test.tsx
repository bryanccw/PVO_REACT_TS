import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders framework', () => {
  render(<App />);
  const linkElement = screen.getByTestId('framework-header');
  expect(linkElement).toBeInTheDocument();
});
