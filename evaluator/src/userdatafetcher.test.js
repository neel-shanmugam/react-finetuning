import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import UserDataFetcher from './UserDataFetcher';

// Mocking axios.get method
jest.mock('axios');

describe('UserDataFetcher', () => {
    const mockUrl = 'https://api.example.com/user';
    const mockUser = { name: 'John Doe' };

    beforeEach(() => {
        axios.get.mockResolvedValue({ data: mockUser });
    });

    test('fetches and displays user data', async () => {
        render(<UserDataFetcher url={mockUrl} />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
        await waitFor(() => expect(screen.getByText(mockUser.name)).toBeInTheDocument());
    });
});
