import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';

const TapWedstrijd = () => {
	const margin = { margin: '2rem 0' };

	return (
		<>
			<ul>
				<Link to={`${ROUTES.tapWedstrijd}/100`}>
					<li style={margin}>100m</li>
				</Link>
				<Link to={`${ROUTES.tapWedstrijd}/200`}>
					<li style={margin}>200m</li>
				</Link>
				<Link to={`${ROUTES.tapWedstrijd}/400`}>
					<li style={margin}>400m</li>
				</Link>
			</ul>
		</>
	);
};

export default TapWedstrijd;
