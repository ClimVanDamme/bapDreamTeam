import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
//
import styles from '../styles/layout.module.css';

import { Helmet } from 'react-helmet';

import { ROUTES } from '../constants';

//import containers
import Home from './Home';
//
import Uitleg from '../components/Uitleg';
import RouteContainer from './RouteContainer';
//
// import Belofte from './Belofte';
import BelofteContainer from './BelofteContainer';
//
import Supporterslied from './Supporterslied';
import OverzichtSupporterslied from './OverzichtSupporterslied';
import AudioInput from './AudioInput';
//
import TapWedstrijd from './TapWedstrijd';
import TapInput from './TapInput';
//
import SmoothieMaker from './SmoothieMaker';
import SmoothieMixer from './SmoothieMixer';
//
import PostkaartStudent from './PostkaartStudent';
import PostkaartVakantieganger from './PostkaartVakantieganger';
import PostkaartWerkmens from './PostkaartWerkmens';

class App extends Component {
	render() {
		return (
			<main className={styles.responsiveWrapper}>
				<Switch>
					{/* HOME */}
					<Route key={1} exact path={ROUTES.home}>
						<Home />
						<Helmet>
							<title>De Spelen zijn van ons</title>
							<meta
								name='description'
								content='Steun de Belgische atleten op de Olympische Spelen 2020 in Tokio. Aangeboden door Sporza.'
							/>
							<meta
								name='tags'
								content='campagne, sporza, olympische spelen, tokio, 2020'
							/>
						</Helmet>
					</Route>
					{/* BELOFTE */}
					<RouteContainer
						key={2}
						path={ROUTES.belofte}
						routes={[
							{
								component: 'uitleg',
								path: '',
								titel: 'supporterslied',
								description: 'Maak een belofte gedurende de Olympische Spelen.',
								uitleg:
									'Kies welk soort belofte je wilt aangaan met iemand en vul vervolgens de namen ins ;)',
								buttons: [
									{ label: 'Afkick', path: 'afkick', img: 'afkickImg' },
									{ label: 'Voornemen', path: 'voornemen', img: 'voornemenImg' }
								]
							},
							{
								component: <BelofteContainer soort={'afkick'} />,
								path: 'afkick',
								titel: 'Overzicht fragmenten',
								description: '100 meter tappen',
								uitleg: '',
								buttons: ''
							},
							{
								component: <BelofteContainer soort={'voornemen'} />,
								path: 'voornemen',
								titel: 'Overzicht fragmenten',
								description: '100 meter tappen',
								uitleg: '',
								buttons: ''
							}
						]}
					/>
					{/* SUPPORTERSLIED */}
					<RouteContainer
						key={3}
						path={ROUTES.supporterslied}
						routes={[
							{
								component: 'uitleg',
								path: '',
								titel: 'Supporterslied',
								description:
									'Maak je eigen supporterslied om de Belgische atleten op de Olympische Spelen aan te moedigen!',
								uitleg:
									'Maak maximaal 10 lagen van 10 seconden aan, waarin jij jouw eigen supporterslied componeert. Deel vervolgens jouw meesterwerk met iedereen ;)',
								buttons: [{ label: 'Maak een meesterwerk', path: 'overzicht' }]
							},
							{
								component: <OverzichtSupporterslied />,
								path: 'overzicht',
								titel: 'Overzicht fragmenten',
								description: '100 meter tappen',
								uitleg: '',
								buttons: ''
							},
							{
								component: <AudioInput />,
								path: 'opnemen',
								titel: 'Opnemen nieuwe laag',
								description: 'Opnemen nieuwe laag supporterslied',
								uitleg: '',
								buttons: ''
							}
						]}
					/>
					{/* tapwedstrijd */}
					<RouteContainer
						key={4}
						path={ROUTES.tapWedstrijd}
						routes={[
							{
								component: 'uitleg',
								path: '',
								titel: 'Tapwedstrijd',
								description:
									'Laat je inspireren voor een frisse, gezonde en Belgische smoothie!',
								uitleg:
									'Druk op de mix knop en bekijk verrassende combinaties van fruit om in jouw smoothie te steken.',
								buttons: [
									{ label: '100m', path: '100' },
									{ label: '200m', path: '200' },
									{ label: '400m', path: '400' }
								]
							},
							{
								component: <TapInput max={100} />,
								path: '100',
								titel: '100m Tapwedstrijd',
								description: '100 meter tappen',
								uitleg: '',
								buttons: ''
							},
							{
								component: <TapInput max={200} />,
								path: '200',
								titel: '200m Tapwedstrijd',
								description: '200 meter tappen',
								uitleg: '',
								buttons: ''
							},
							{
								component: <TapInput max={400} />,
								path: '400',
								titel: '400m Tapwedstrijd',
								description: '400 meter tappen',
								uitleg: '',
								buttons: ''
							}
						]}
					/>
					{/* smoothieMaker */}
					<RouteContainer
						key={5}
						path={ROUTES.smoothieMaker}
						routes={[
							{
								component: 'uitleg',
								path: '',
								titel: 'Smoothie Maker',
								description:
									'Laat je inspireren voor een frisse, gezonde en Belgische smoothie!',
								uitleg:
									'Druk op de mix knop en bekijk verrassende combinaties van fruit om in jouw smoothie te steken.',
								buttons: [{ label: 'beginnen', path: 'mixer' }]
							},
							{
								component: <SmoothieMixer />,
								path: 'mixer',
								titel: 'Smoothie Mixer',
								description:
									'Laat je inspireren voor een frisse, gezonde en Belgische smoothie!',
								uitleg: '',
								buttons: ''
							}
						]}
					/>
					{/* POSTKAART */}
					<RouteContainer
						key={6}
						path={ROUTES.postkaartje}
						routes={[
							{
								component: 'uitleg',
								path: '',
								titel: 'Postkaartje',
								description: 'Stuur iemand een Olympisch postkaartje',
								uitleg:
									'Kies voor welke persoon je een kaartje wilt schrijven, kies daarna uit een kaartje en voeg vervolgens een persoonlijk tekstje op. Het resultaat kan je versturen ;)',
								buttons: [
									{ label: 'student', path: 'student' },
									{ label: 'vakantieganger', path: 'vakantieganger' },
									{ label: 'werkmens', path: 'werkmens' }
								]
							},
							{
								component: <PostkaartStudent />,
								path: 'student',
								titel: 'Smoothie Mixer',
								description:
									'Laat je inspireren voor een frisse, gezonde en Belgische smoothie!',
								uitleg: '',
								buttons: ''
							},
							{
								component: <PostkaartVakantieganger />,
								path: 'vakantieganger',
								titel: 'Smoothie Mixer',
								description:
									'Laat je inspireren voor een frisse, gezonde en Belgische smoothie!',
								uitleg: '',
								buttons: ''
							},
							{
								component: <PostkaartWerkmens />,
								path: 'werkmens',
								titel: 'Smoothie Mixer',
								description:
									'Laat je inspireren voor een frisse, gezonde en Belgische smoothie!',
								uitleg: '',
								buttons: ''
							}
						]}
					/>
					;
				</Switch>
			</main>
		);
	}
}

export default withRouter(App);
