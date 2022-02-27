import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Blank from '../Blank';

/*
    Frontend tests for blank component.
*/

// Test blank tiles are displayed.
test('Display Blank', () => {
    const { container } = render(<Blank length={5}/>);

    expect(container).toBeInTheDocument();
});