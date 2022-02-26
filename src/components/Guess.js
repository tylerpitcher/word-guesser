import Tile from './Tile';

/*
    Returns css object for each tile.
*/
function getStyle(found, answer, loc) {
    if (found === answer[loc]) return {
        'backgroundColor': 'lightgreen',
        'animation': 'jump 0.5s ease-in',
        'animationDelay': 0.2 * (loc + 1) + 's'
    };
    if (answer.includes(found)) return { 'backgroundColor': 'lightyellow' };
    
    return { 'backgroundColor': 'rgb(299, 100, 100)' };
}

/*
    Component of tiles for each letter of guess.
*/
function Guess(props) {
    const answer = props.answer;
    // Create array of tiles to display
    const tiles = props.guess.map((letter, loc) => {
        const style = getStyle(letter, answer, loc);  
        return <Tile letter={letter} color={''} key={letter + loc} style={style}/>
    });

    return <div className='tile-wrapper'>{tiles}</div>;
}

export default Guess;