import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchableList from './SearchableList';

describe('SearchableList Component', () => {
  const items = ['Apple', 'Banana', 'Cherry'];

  test('renders search input and list items', () => {
    render(<SearchableList items={items} />);
    // Check for input element
    expect(screen.getByPlaceholderText('Search items...')).toBeInTheDocument();
    // Check all list items are rendered
    items.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  test('filters items based on search input', () => {
    render(<SearchableList items={items} />);
    // Type 'a' into the search box
    fireEvent.change(screen.getByPlaceholderText('Search items...'), { target: { value: 'a' } });
    // Expect 'Apple' and 'Banana' to be visible
    expect(screen.getByText('Apple')).toBeVisible();
    expect(screen.getByText('Banana')).toBeVisible();
    // 'Cherry' does not contain 'a' and should not be visible
    expect(screen.queryByText('Cherry')).toBeNull();
  });

  test('shows no items if no match', () => {
    render(<SearchableList items={items} />);
    // Type 'z' into the search box, no items contain 'z'
    fireEvent.change(screen.getByPlaceholderText('Search items...'), { target: { value: 'z' } });
    // No items should be visible
    items.forEach(item => {
      expect(screen.queryByText(item)).toBeNull();
    });
  });
});
