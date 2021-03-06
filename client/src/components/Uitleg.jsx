import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import Button from './Button';
import * as uuid from 'uuid/v4';
import TitleMiddle from '../components/TitleMiddle';
import Navigation from '../components/Navigation';

import styleUitleg from './Uitleg.module.css';
import styleUI from '../styles/uiControls.module.css';

const Uitleg = ({ path, titel, uitleg, buttons }) => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	console.log('in uitleg');
	console.log(titel);
	console.log(buttons);
	console.log('in de uitleg comp');
	return (
		<>
			<Navigation href={'/'} />
			<div className={styleUitleg.containerGrid}>
				<section className={styleUitleg.content}>
					<div className={styleUitleg.textPart}>
						<TitleMiddle keyValue={uuid()} text={titel} />
						<div className={styleUI.tussenTitelCont}>
							<h2 className={styleUI.visuallyHidden}>Hoe werkt het?</h2>
						</div>
						<p>{uitleg}</p>
					</div>
					<div className={styleUitleg.buttonPart}>
						<ul className={styleUitleg.selectionContainer}>
							{buttons.map((button, index) => {
								return (
									<li className={`${styleUitleg.btnCont}${index}`} key={uuid()}>
										<div className={styleUitleg.imgCenter}>
											<Link to={`${path}/${button.path}`}>
												{button.img != undefined ? (
													<picture className={styleUitleg.btnImg}>
														<source
															type='image/png'
															srcSet={
																(`assets/img/${button.img}_256.png 256w`,
																`assets/img/${button.img}_702.png 702w`)
															}
														/>
														<img
															className={styleUitleg.btnImg}
															src={`..assets/img/${button.img}_256.png`}
															alt={`${button.img}`}
														/>
													</picture>
												) : (
													<></>
												)}
											</Link>
										</div>
										<div className={styleUitleg.btnCenter}>
											<Button
												keyValue={uuid()}
												label={button.label}
												color={'primary'}
												link={`${path}/${button.path}`}
											/>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</section>
			</div>
		</>
	);
};

// Sporza.propTypes = {
//   sporzaStore: PropTypes.observableObject.isRequired
// };

export default Uitleg;
