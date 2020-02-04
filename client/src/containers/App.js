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
					<Route exact path={ROUTES.home}>
						<Home />
					</Route>
					<Route exact strict path={ROUTES.belofte}>
						<Belofte />
					</Route>
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
						stict
						exact
						component={TapWedstrijd}
					/>
					<Route exact strict path={`${ROUTES.tapWedstrijd}/100`}>
						<TapInput max={100} />
					</Route>
					<Route exact strict path={`${ROUTES.tapWedstrijd}/200`}>
						<TapInput max={200} />
					</Route>
					<Route exact strict path={`${ROUTES.tapWedstrijd}/400`}>
						<TapInput max={400} />
					</Route>
				</Switch>
			</main>
		);
	}
}

export default withRouter(App);
