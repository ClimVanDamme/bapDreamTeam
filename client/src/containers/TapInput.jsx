import React from 'react';
import { inject, observer } from 'mobx-react';

const TapInput = ({ tapwedstrijdStore }) => {
	let {
		aantalTaps,
		addTap,
		isRunning,
		startTimer,
		getTimeNow,
		timePassed,
		initTaps,
		stopTimer,
		maxTaps,
		resetTimer,
		isCompleted,
		finalTime
	} = tapwedstrijdStore;

	const discipline = 10;

	const Instructie = () => {
		if (aantalTaps === 0) {
			return (
				<p
					style={{
						color: 'white'
					}}
				>
					Tap om te beginnen!
				</p>
			);
		} else {
			return '';
		}
	};

	const initTimer = () => {
		if (aantalTaps === 0) {
			addTap();
			initTaps(discipline);
			startTimer();
		} else {
			console.log('clicked');
		}
		setInterval(() => {
			getTimeNow();
		}, 100);
	};

	return (
		<>
			<div>{timePassed} sec</div>
			<div
				onClick={() => {
					if (isRunning === false) {
						initTimer();
					} else {
						if (aantalTaps < maxTaps) {
							console.log('toevoegen tap');
							addTap();
							if (aantalTaps + 1 === maxTaps) {
								console.log('max bereikt');
								isRunning = false;
								isCompleted = true;
								console.log(maxTaps);
								stopTimer();
							}
						}
					}
				}}
				style={{
					cursor: 'pointer',
					width: '30rem',
					height: '30rem',
					backgroundColor: 'grey',
					paddingTop: '1rem'
				}}
			>
				<p
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '5rem',
						height: '5rem',
						color: 'white',
						borderRadius: '100%',
						margin: '0 auto',
						border: 'solid white 0.1rem'
					}}
				>
					{aantalTaps}
				</p>
				<Instructie />
			</div>
			<button
				onClick={() => {
					console.log('reset clicked');
					resetTimer();
					aantalTaps = 0;
					isRunning = false;
					isCompleted = false;
					maxTaps = 0;
				}}
			>
				reset
			</button>
		</>
	);
};

export default inject(`tapwedstrijdStore`)(observer(TapInput));
