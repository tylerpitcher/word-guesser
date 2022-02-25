import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('Display App', () => {
    render(<App/>)
    const app = screen.getByTestId('app');
    expect(app).toBeInTheDocument();
});

test('Display Popup', () => {
    render(<App/>)
    const popup = screen.getByTestId('popup');
    expect(popup).toHaveTextContent('Welcome!')
})