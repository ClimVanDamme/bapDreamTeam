import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const Uitleg = ({ path, titel, uitleg, buttons }) => {
	console.log('in uitleg');
	console.log(buttons);
	return (
		<section>
			<h1>{titel}</h1>
			<h2>Hoe werkt het?</h2>
			<p>{uitleg}</p>
			<div>
				<ul>
					{buttons.map((button, index) => {
						return (
							<li key={index}>
								<Link key={index} to={`${path}/${button.path}`}>
									{button.label}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

// Sporza.propTypes = {
//   sporzaStore: PropTypes.observableObject.isRequired
// };

export default Uitleg;
