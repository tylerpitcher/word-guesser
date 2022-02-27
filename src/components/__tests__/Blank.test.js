/*
    Frontend tests for Blank component.
*/
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Blank from '../Blank';


// Test blank tiles are displayed to users.
test('Display Blank', () => {
    const { container } = render(<Blank length={5}/>);

    expect(container).toBeInTheDocument();
});