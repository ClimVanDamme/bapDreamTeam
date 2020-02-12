import React from 'react';
import { NavLink } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { ROUTES } from '../constants';
import Navigation from '../components/Navigation';

const Supporterslied = ({ supportersliedStore }) => {
	return (
		<>
			<Navigation href={'/supporterslied'} />
			<section>
				<NavLink to={ROUTES.overzichtSupporterslied}>GO</NavLink>
			</section>
		</>
	);
};

export default inject(`supportersliedStore`)(observer(Supporterslied));
