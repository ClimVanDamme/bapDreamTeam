import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

function TapInput({ max, tapwedstrijdStore }) {
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
		resetTimer
	} = tapwedstrijdStore;

	useEffect(() => {
		resetTimer();
		return () => {
			resetTimer();
		};
	}, []);

	const discipline = max;

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
		<section
			style={{
				width: 'max-content',
				margin: '0 auto'
			}}
		>
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
						userSelect: 'none',
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
					{timePassed} sec
				</p>
				<div
					style={{
						margin: '5rem auto'
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							color: 'white'
						}}
					>
						<p
							style={{
								userSelect: 'none',
								fontSize: '2rem'
							}}
						>
							{aantalTaps}
						</p>
						<Instructie />
					</div>
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center'
				}}
			>
				<button
					style={{
						userSelect: 'none',
						width: 'min-content',
						marginTop: '2rem'
					}}
					onClick={() => {
						console.log('reset clicked');
						resetTimer();
						aantalTaps = 0;
						isRunning = false;
						maxTaps = 0;
					}}
				>
					reset
				</button>
			</div>
		</section>
	);
}

export default inject(`tapwedstrijdStore`)(observer(TapInput));
