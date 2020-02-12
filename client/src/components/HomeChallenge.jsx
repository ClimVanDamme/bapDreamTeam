import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';
import * as uuid from 'uuid/v4';
//
import Button from '../components/Button';
import Title from '../components/Title';
import TitleMiddle from '../components/TitleMiddle';
//
import style from '../containers/Home.module.css';

const HomeChallenge = ({ challenge, unlockDate, direction }) => {
	return (
		<div
			className={
				unlockDate === '4 augustus' || unlockDate === '7 augustus'
					? style.blackWhite
					: ''
			}
		>
			<article
				className={
					direction === 'links'
						? style.challengeGridLeft
						: style.challengeGridRight
				}
			>
				<div className={style.timelineGrid}>
					<div className={style.dateCont}>
						<p>Vanaf {unlockDate}</p>
					</div>
					<div className={style.timelineCircle}>
						<img
							className={style.circlesvg}
							src='./assets/img/tijdlijn_circle.svg'
							alt='circle'
						/>
					</div>
					<div className={style.timelineLine}>
						<div className={style.lineOne}></div>
						{/* <div className={style.lineTwo}></div> */}
					</div>
				</div>
				<div className={style.challengeTextGrid}>
					<div className={style.challengeTitle}>
						<TitleMiddle keyValue={uuid()} text={challenge} />
					</div>
					<div className={style.challengeBtn}>
						<Button
							keyValue={uuid()}
							color={'secondary'}
							link={challenge}
							label={'Ga de uitdaging aan'}
						/>
					</div>
				</div>
				<div className={style.challengeImg}>
					<img
						src={`./assets/img/challenge_${challenge}.png`}
						width='300'
						height='300'
						alt=''
					/>
				</div>
			</article>
		</div>
	);
};

export default HomeChallenge;
