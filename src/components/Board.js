/*
    Board component, contains all tiles & input form.
*/
function Board(props) {
    return (
        <div id='board'>
            { props.guesses }
            { props.blanks }

            <form onSubmit={props.handler} autoComplete='off'>
                <label htmlFor='guess-input'>Guess:</label>
                <input type='text' id='guess-input' name='guess' />
                <input type='submit' value='Try' name='submit' id='submit' />
            </form>
        </div>
    );
}

export default Board;