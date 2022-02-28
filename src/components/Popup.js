/*
    File contains all components for popups to render.
*/
import {useRef, useEffect} from 'react';

/*
    Popup with content & close button.
*/
function Popup(props) {
    // Set focus to popup
    const ref = useRef(null);
    useEffect(() => ref.current.focus(), [ref]);

    return (
        <div className="popup" ref={ref}>
            <div className="popup-inner" data-testid='popup'>
                {props.children}
                <button onClick={props.dismiss}>Close</button>
            </div>
        </div>
    );
}


/*
    Returns correct popup based off of props.
*/
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