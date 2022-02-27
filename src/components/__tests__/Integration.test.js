/*
    Frontend integration tests for App.
*/
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App';

// Test that the App is displayed.
test('Display App', () => {
    const { container } = render(<App/>);
    
    expect(container).toBeInTheDocument();
});

// Test that welcome message is displayed.
test('Popup in App', () => {
    render(<App/>);

    const popup = screen.getByText('Welcome!');

    expect(popup).toBeInTheDocument();

    // Try to close popup
    userEvent.click(screen.getByText('Close'));
    expect(popup).not.toBeInTheDocument();
});

// Test that user can make guess.
test('Make Guess', () => {
    render(<App/>);
    userEvent.click(screen.getByText('Close'));

    const input = screen.getByLabelText('Guess:');
    userEvent.type(input, 'guess');
    userEvent.click(screen.getByText('Try'));
});