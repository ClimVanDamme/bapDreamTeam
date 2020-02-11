import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import './styles/index.css';

const rootElement = document.getElementById(`root`);

if (rootElement.hasChildNodes()) {
	ReactDOM.hydrate(
		<Provider {...store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>,
		rootElement
	);
} else {
	ReactDOM.render(
		<Provider {...store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>,
		rootElement
	);
}

serviceWorker.register();
