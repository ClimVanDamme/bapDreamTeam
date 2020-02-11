import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';
import * as uuid from 'uuid/v4';
//
import Button from '../components/Button';
import Title from '../components/Title';
import TitleMiddle from '../components/TitleMiddle';
//
import style from '../containers/Home.module.css';

const HomeChallenge = ({ challenge, keyValue, tekst }) => {
	return (
		<>
			<article className={style.challengeGrid}>
				<div className={style.challengeTitle}>
					<TitleMiddle keyValue={uuid()} text={challenge} />
				</div>
				<img
					className={style.challengeImg}
					src={`./assets/img/challenge_${challenge}.png`}
					alt=''
				/>
				{/* <p>{tekst}</p> */}
				<div className={style.challengeBtn}>
					<Button
						keyValue={uuid()}
						color={'secondary'}
						link={challenge}
						label={'Ga de uitdaging aan'}
					/>
				</div>
			</article>
		</>
	);
};

export default HomeChallenge;
