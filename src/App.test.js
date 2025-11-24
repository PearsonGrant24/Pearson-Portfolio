import { render, screen } from '@testing-library/react';
import App from './app/App.tsx';


const {PUBLIC_URL} = process.env;

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
