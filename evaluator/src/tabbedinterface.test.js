import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TabbedInterface from './TabbedInterface';

describe('TabbedInterface', () => {
    const tabs = [
        { label: 'Tab 1', content: 'Content for Tab 1' },
        { label: 'Tab 2', content: 'Content for Tab 2' }
    ];

    test('renders tabs and shows content for the first tab by default', () => {
        render(<TabbedInterface tabs={tabs} />);
        expect(screen.getByText('Content for Tab 1')).toBeVisible();
        expect(screen.queryByText('Content for Tab 2')).toBeNull();
    });

    test('changes content when different tabs are clicked', () => {
        render(<TabbedInterface tabs={tabs} />);
        fireEvent.click(screen.getByText('Tab 2'));
        expect(screen.getByText('Content for Tab 2')).toBeVisible();
        expect(screen.queryByText('Content for Tab 1')).toBeNull();
    });
});
