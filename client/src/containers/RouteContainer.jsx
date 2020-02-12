import React from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Uitleg from '../components/Uitleg';

import * as uuid from 'uuid/v4';

const RouteContainer = ({ routes, path, key }) => {
	return (
		<>
			{routes.map((route, index) => {
				if (route.component === 'uitleg') {
					return (
						<>
							<Route key={uuid()} strict exact path={path}>
								<Uitleg
									path={path}
									titel={route.titel}
									uitleg={route.uitleg}
									buttons={route.buttons}
								/>
								<Helmet>
									<title>{route.titel}</title>
									<meta name='description' content={route.description} />
								</Helmet>
							</Route>
						</>
					);
				} else {
					return (
						<>
							<Route key={uuid()} strict exact path={`${path}/${route.path}`}>
								{route.component}
								<Helmet>
									<title>{route.titel}</title>
									<meta name='description' content={route.description} />
								</Helmet>
							</Route>
						</>
					);
				}
			})}
		</>
	);
};

export default RouteContainer;
