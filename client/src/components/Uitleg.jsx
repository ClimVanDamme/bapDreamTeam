import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import Button from './Button';
import Title from './Title';
import * as uuid from 'uuid/v4';

import styleUitleg from './Uitleg.module.css';
import styleUI from '../styles/uiControls.module.css';

const Uitleg = ({ path, titel, uitleg, buttons }) => {
	console.log('in uitleg');
	console.log(titel);
	console.log(buttons);
	return (
		<section>
			<Title keyValue={uuid()} text={titel} />
			<img
				className={styleUitleg.challengeImg}
				src={`./assets/img/${titel}@2x.png`}
				alt={`${titel} foto`}
			/>
			<div className={styleUI.tussenTitelCont}>
				<h2 className={styleUI.tussenTitel}>Hoe werkt het?</h2>
			</div>
			<p>{uitleg}</p>
			<div>
				<ul>
					{buttons.map((button, index) => {
						return (
							<li className={styleUitleg.btnCont} key={index}>
								<img
									className={styleUitleg.btnImg}
									src={`./assets/img/${button.img}.png`}
									alt=''
								/>
								<div className={styleUitleg.btnCenter}>
									<Button
										keyValue={uuid()}
										label={button.label}
										color={'secondary'}
										link={`${path}/${button.path}`}
									/>
								</div>
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
