/*
    Frontend tests for Guess component.
*/
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Guess from '../Guess';

// Test that a users guess is displayed.
test('Display Guess', () => {
    render(<Guess answer={'abc'.split('')} guess={'abc'.split('')}/>);

    // Expect all 3 letters to be in the div.
    expect(screen.getByText('a')).toBeInTheDocument();
    expect(screen.getByText('b')).toBeInTheDocument();
    expect(screen.getByText('c')).toBeInTheDocument();
});