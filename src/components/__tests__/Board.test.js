/*
    Frontend unit tests for Board component.
*/
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Board from '../Board';

// Test that guess prop is displayed.
test('Test Guess Prop', () => {
    render(<Board guesses={'abc'}/>);

    const board = screen.getByText('abc');
    expect(board).toBeInTheDocument();
});

// Test that blanks prop is displayed.
test('Test Blanks Prop', () => {
    render(<Board blanks={'abc'}/>);

    const board = screen.getByText('abc');
    expect(board).toBeInTheDocument();
});

// Test that handler is called when form is submitted.
test('Test Handler Prop', () => {
    var state = -1;
    render(<Board handler={() => state = 1}/>);
    userEvent.click(screen.getByText('Try'));

    expect(state).toBe(1);
});