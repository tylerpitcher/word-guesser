import {useRef, useEffect} from 'react';

function Popup(props) {
    // Set focus to dismiss button
    const ref = useRef(null);
    useEffect(() => ref.current.focus(), [ref]);

    return (
        <div className="popup">
            <div className="popup-inner" ref={ref} data-testid='popup'>
                {props.children}
                <button onClick={props.dismiss}>Close</button>
            </div>
        </div>
    );
}

function PopupHandler(props) {
    const { word, stage, start, restart } = props;

    switch (stage) {
        case -1:
            return (
                <Popup dismiss={start}>
                    Welcome!
                </Popup>
            );
        case 1:
            return (
                <Popup dismiss={restart}>
                    <p>                    
                        You just lost!
                        The word was <a href={'https://www.merriam-webster.com/dictionary/' + word} target='_blank'>{word}</a>.
                    </p>
                </Popup>
            );
        case 2:
            return (
                <Popup trigger={true} dismiss={restart}>
                    You just won!
                </Popup>
            );
        default:
            return '';
    }
}

export default PopupHandler;