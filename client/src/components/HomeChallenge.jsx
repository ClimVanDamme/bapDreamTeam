import React from 'react';
import * as uuid from 'uuid/v4';
//
import Button from '../components/Button';
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
					</div>
				</div>
				<div className={style.challengeTextGrid}>
					<div className={style.challengeTitle}>
						{unlockDate === '4 augustus' || unlockDate === '7 augustus' ? (
							<TitleMiddle keyValue={uuid()} text={'binnenkort'} />
						) : (
							<TitleMiddle keyValue={uuid()} text={challenge} />
						)}
					</div>
					<div
						className={
							unlockDate === '4 augustus' || unlockDate === '7 augustus'
								? style.hidden
								: style.challengeBtn
						}
					>
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
