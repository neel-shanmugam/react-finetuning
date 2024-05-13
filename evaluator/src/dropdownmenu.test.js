import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DropdownMenu from './DropdownMenu';

describe('DropdownMenu Component', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  test('renders dropdown button initially', () => {
    render(<DropdownMenu options={options} />);
    const button = screen.getByRole('listbox');
    expect(button).toBeInTheDocument();
  });

  test('opens dropdown options on button click', () => {
    render(<DropdownMenu options={options} />);
    const button = screen.getByRole('listbox');
    fireEvent.click(button);
    const optionList = screen.getByRole('list');
    expect(optionList).toBeInTheDocument();
    expect(optionList.children.length).toBe(options.length);
  });

  test('renders all options passed as props', () => {
    render(<DropdownMenu options={options} />);
    fireEvent.click(screen.getByRole('listbox'));
    options.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  test('can select an option from the dropdown', () => {
    render(<DropdownMenu options={options} />);
    fireEvent.click(screen.getByRole('listbox')); // Open dropdown
    fireEvent.click(screen.getByText('Option 2')); // Click on Option 2
    expect(screen.getByRole('listbox')).toHaveTextContent('Option 2');
    expect(screen.queryByRole('option')).not.toBeInTheDocument(); // Dropdown should be closed
  });

  test('closes dropdown after an option is selected', () => {
    render(<DropdownMenu options={options} />);
    const button = screen.getByRole('listbox');
    fireEvent.click(button); // Open dropdown
    fireEvent.click(screen.getByText('Option 1')); // Select Option 1
    expect(button).toHaveTextContent('Option 1');
    expect(screen.queryByRole('option')).toBeNull(); // Ensure dropdown is closed
  });
});
