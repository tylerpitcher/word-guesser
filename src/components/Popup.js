import {useRef, useEffect} from 'react';

function Popup(props) {
    // Set focus to dismiss button
    const ref = useRef(null);
    useEffect(() => ref.current.focus(), [ref]);

    return (
        <div className="popup">
            <div className="popup-inner" ref={ref}>
                {props.children}
                <button onClick={props.dismiss}>Close</button>
            </div>
        </div>
    );
}

function PopupHandler(props) {
    const stage = props.stage, word = props.word;

    switch (stage) {
        case -1:
            return (
                <Popup dismiss={props.start}>
                    Welcome!
                </Popup>
            );
        case 1:
            return (
                <Popup dismiss={props.restart}>
                    <p>                    
                        You just lost!
                        The word was <a href={'https://www.merriam-webster.com/dictionary/' + word} target='_blank'>{word}</a>.
                    </p>
                </Popup>
            );
        case 2:
            return (
                <Popup trigger={true} dismiss={props.restart}>
                    You just won!
                </Popup>
            );
        default:
            return '';
    }
}

export default PopupHandler;