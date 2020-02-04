import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import styles from './App.module.css';

import { ROUTES } from '../constants';

//import containers
import Home from './Home';
import Belofte from './Belofte';
//
import Supporterslied from './Supporterslied';
import OverzichtSupporterslied from './OverzichtSupporterslied';
import AudioInput from './AudioInput';
//
import TapWedstrijd from './TapWedstrijd';
import TapInput from './TapInput';

class App extends Component {
	render() {
		return (
			<main className={styles.layout}>
				<Switch>
					<Route path={ROUTES.home} exact strict component={Home} />
					<Route path={ROUTES.belofte} exact strict component={Belofte} />
					{/* supporterslied */}
					<Route
						path={ROUTES.supporterslied}
						exact
						strict
						component={Supporterslied}
					/>
					<Route
						path={ROUTES.overzichtSupporterslied}
						component={OverzichtSupporterslied}
					/>
					<Route path={ROUTES.audioInput} component={AudioInput} />
					{/* tapwedstrijd */}
					<Route
						path={ROUTES.tapWedstrijd}
						exact
						strict
						component={TapWedstrijd}
					/>
					<Route path={`${ROUTES.tapInput}`} component={TapInput} />
				</Switch>
			</main>
		);
	}
}

export default withRouter(App);
