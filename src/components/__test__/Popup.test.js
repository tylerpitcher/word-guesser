import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import PopupHandler from '../Popup';

test('Display Welcome Popup', () => {
    render(<PopupHandler stage={-1}/>);
    const popup = screen.getByTestId('popup');
    expect(popup).toBeInTheDocument();
});

test('Close Welcome Popup', () => {
    var stage = -1;
    render(<PopupHandler stage={stage} start={() => stage = 0}/>);
    userEvent.click(screen.getByText('Close'));
    
    expect(stage).toEqual(0);
});

test('Display Loss Popup', () => {
    var stage = 1;
    render(<PopupHandler word='dog' stage={stage} restart={() => stage = 0}/>);
    const popup = screen.getByTestId('popup');
    expect(popup).toHaveTextContent('You just lost!');
});

test('Close Loss Popup', () => {
    var stage = 1;
    render(<PopupHandler word='dog' stage={stage} restart={() => stage = 0}/>);
    userEvent.click(screen.getByText('Close'));

    expect(stage).toEqual(0);
});

test('Display Win Popup', () => {
    var stage = 2;
    render(<PopupHandler word='dog' stage={stage} restart={() => stage = 0}/>);
    const popup = screen.getByTestId('popup');
    expect(popup).toHaveTextContent('You just won!');
});

test('Close Win Popup', () => {
    var stage = 2;
    render(<PopupHandler word='dog' stage={stage} restart={() => stage = 0}/>);
    userEvent.click(screen.getByText('Close'));

    expect(stage).toEqual(0);
});