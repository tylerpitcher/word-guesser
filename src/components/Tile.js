/*
    Square tile for letter passed in props.
*/
function Tile(props) {
    return (
        <div className='tile' style={props.style}>
            {props.letter}
        </div>
    );
}

export default Tile;