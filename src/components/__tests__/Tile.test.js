/*
    Frontend tests for tile component.
*/
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tile from '../Tile';

// Test tile is displayed with letter.
test('Display Tile', () => {
    render(<Tile letter='a'/>);

    const tile = screen.getByText('a');
    expect(tile).toBeInTheDocument();
});

// Test tile is displayed with style passed.
test('Display Tile with Style', () => {
    render(<Tile letter='a' style={{ 'color': 'red' }}/>);

    const tile = screen.getByText('a');
    expect(tile).toHaveStyle('color: red');
});