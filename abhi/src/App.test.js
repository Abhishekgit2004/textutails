import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Navbar component', () => {
  render(<App />);
  // Adjust the text to something that is actually in your Navbar
  const navbarElement = screen.getByText(/Abhishek/i); 
  expect(navbarElement).toBeInTheDocument();
});

test('renders Textform component with heading', () => {
  render(<App />);
  // Ensure that the heading or other text in Textform is present
  const headingElement = screen.getByText(/enter your text/i);
  expect(headingElement).toBeInTheDocument();
});

