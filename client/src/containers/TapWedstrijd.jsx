import React from 'react';
import { NavLink } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { ROUTES } from '../constants';

const TapWedstrijd = ({ tapwedstrijdStore }) => {
	return (
		<>
			<section>
				<NavLink to={ROUTES.tapInput}>100</NavLink>
			</section>
		</>
	);
};

export default inject(`tapwedstrijdStore`)(observer(TapWedstrijd));
