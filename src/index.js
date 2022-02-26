import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// ReactDOM.render(
// 	<App/>, 
// 	document.getElementById('root')
// );

import PopupHandler from './components/Popup';

ReactDOM.render(
	<PopupHandler word='dog' stage={1} restart={() => {}}/>,
	document.getElementById('root')
);