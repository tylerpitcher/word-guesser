import {Component} from 'react';
import Blank from './Blank';
import Guess from './Guess';
import PopupHandler from './Popup';
import Board from './Board';
import randomWords from 'random-words';

/*
    Main app component.
*/
class App extends Component {
    constructor(props) {
        super(props);

        this.generateWord();

        this.state = {
            answer: this.generateWord(),
            guesses: [],
            stage: -1
        };
    }

    generateWord = () => {
        const word = randomWords({ exactly: 1, maxLength: 6})[0];
        return word.toUpperCase().split('');
    }

    start = () => {
        this.setState(() => ({
            stage: 0
        }));
    }

    restart = () => {
        this.setState(prev => ({ 
            answer: this.generateWord(), 
            guesses: [],
            stage: 0
        }));
    }

    isAnswer = (guess) => {
        return guess.join() === this.state.answer.join();
    }

    handleSubmit = (event) => {
        const answerLength = this.state.answer.length;
        const guess = event.target.elements.guess.value.toUpperCase().split('');
        const numberOfAttempts = this.state.guesses.length;

        if (guess.length === answerLength) {
            if (this.isAnswer(guess)) {
                this.setState(() => ({ stage: 2 }));
            } 

            this.setState(prev => ({
                guesses: [
                    ...prev.guesses, 
                    <Guess guess={guess} answer={prev.answer} 
                        key={guess + numberOfAttempts}/>
                ]
            }));
        }

        if (numberOfAttempts+1 >= answerLength && !this.isAnswer(guess)) 
            this.setState(() => ({ stage: 1 }));

        event.preventDefault();
        event.target.elements.guess.value = '';
    }

    render = () => {
        const length = this.state.answer.length;
        const attemptsRemaining = length - this.state.guesses.length;
        const blanks = Array(attemptsRemaining).fill(null).map((_, loc) => (
            <Blank length={length} key={loc}/>
        ));

        return (
            <div className='wrapper' data-testid='app'>
                <PopupHandler word={this.state.answer} stage={this.state.stage} start={this.start} restart={this.restart}/>
                <Board handler={this.handleSubmit} guesses={this.state.guesses} blanks={blanks}/>
            </div>
        );
    }
}

export default App;