/*
    Creates blank tiles with length given in props.
*/
import Tile from './Tile';

export function Blank(props) {
    // Create array of blank tiles to display
    const tiles = Array(props.length).fill(null).map((_, loc) => (
        <Tile letter=' ' color='' key={loc}/>
    ));

    return <div className='tile-wrapper'>{ tiles }</div>;
}

export default Blank