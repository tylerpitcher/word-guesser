import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import PopupHandler from '../Popup';

/*
    Frontend tests for all popups.
*/

// Test if welcome popup is displayed on stage -1.
test('Display Welcome Popup', () => {
    render(<PopupHandler stage={-1}/>);

    const popup = screen.getByTestId('popup');
    expect(popup).toBeInTheDocument();
});

// Test if welcome popup can be closed.
test('Close Welcome Popup', () => {
    var stage = -1;
    render(<PopupHandler stage={stage} start={() => stage = 0}/>);

    userEvent.click(screen.getByText('Close'));
    expect(stage).toEqual(0);
});

// Test if popup displays when player loses.
test('Display Loss Popup', () => {
    var stage = 1;
    render(<PopupHandler word='dog' stage={stage} restart={() => stage = 0}/>);

    const popup = screen.getByTestId('popup');
    expect(popup).toHaveTextContent('You just lost!');
});

// Test if popup can be closed after user loses.
test('Close Loss Popup', () => {
    var stage = 1;
    render(<PopupHandler word='dog' stage={stage} restart={() => stage = 0}/>);

    userEvent.click(screen.getByText('Close'));
    expect(stage).toEqual(0);
});

// Test if popup displays when user wins.
test('Display Win Popup', () => {
    var stage = 2;
    render(<PopupHandler word='dog' stage={stage} restart={() => stage = 0}/>);

    const popup = screen.getByTestId('popup');
    expect(popup).toHaveTextContent('You just won!');
});

// Test if popup can be closed after player wins.
test('Close Win Popup', () => {
    var stage = 2;
    render(<PopupHandler word='dog' stage={stage} restart={() => stage = 0}/>);
    
    userEvent.click(screen.getByText('Close'));
    expect(stage).toEqual(0);
});