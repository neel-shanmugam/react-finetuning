import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HoverButton from './HoverButton'; // Adjust the import based on your project structure

describe('HoverButton Component', () => {
  test('renders button correctly', () => {
    render(<HoverButton />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('has initial non-hover style', () => {
    render(<HoverButton />);
    const buttonElement = screen.getByRole('button');
    // Check for initial style, e.g., background color
    expect(buttonElement).toHaveStyle('background-color: blue');
  });

  test('changes style on hover', () => {
    render(<HoverButton />);
    const buttonElement = screen.getByRole('button');
    // Simulate mouse over to trigger hover style
    fireEvent.mouseOver(buttonElement);
    // Check for style change, e.g., background color
    expect(buttonElement).toHaveStyle('background-color: red');
  });

  test('handles click events', () => {
    const mockOnClick = jest.fn();
    render(<HoverButton onClick={mockOnClick} />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
