import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';

// import styles from "./Home.module.css";
// import stylesLayout from "../styles/layout.module.css";

const Home = () => {
	return (
		<>
			<section>
				<h1>Welkom op de Sporza home!</h1>
				<ul>
					<li key={1}>
						<Link to={`${ROUTES.belofte}`}>Supportificaat</Link>
					</li>
					<li key={2}>
						<Link to={`${ROUTES.supporterslied}`}>Supporterslied</Link>
					</li>
					<li key={3}>
						<Link to={`${ROUTES.tapWedstrijd}`}>tapWedstrijd</Link>
					</li>
					<li key={4}>
						<Link to={`${ROUTES.smoothieMaker}`}>smoothieMaker</Link>
					</li>
					<li key={5}>
						<Link to={`${ROUTES.postkaartje}`}>postkaartje</Link>
					</li>
					<li key={6}>
						<Link to={`${ROUTES.quiz}`}>Welke atleet ben jij?</Link>
					</li>
				</ul>
			</section>
		</>
	);
};

export default Home;
