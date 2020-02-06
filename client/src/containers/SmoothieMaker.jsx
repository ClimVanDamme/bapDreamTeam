import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';

const SmoothieMaker = () => {
	const margin = { margin: '2rem 0' };

	return (
		<div>
			<h1>Smoothiemaker</h1>
			<p>
				Laat je inspireren voor een zomerse en sportieve fruitsmoothie in de
				kleuren van de Belgische vlag!
			</p>
			<Link to={`${ROUTES.smoothieMaker}/mixer`}>
				<button>Begin</button>
			</Link>
		</div>
	);
};

export default SmoothieMaker;
