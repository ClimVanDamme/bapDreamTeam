import React from 'react';
import { inject, observer } from 'mobx-react';

import Button from '../components/Button';
import * as uuid from 'uuid/v4';
import Title from '../components/Title';

import { ROUTES } from '../constants';
import { Link } from 'react-router-dom';

import styles from './OverzichtSupporterslied.module.css';
import TitleMiddle from '../components/TitleMiddle';

import Navigation from '../components/Navigation';

const OverzichtSupporterslied = ({ supportersliedStore }) => {
	const {
		audioLayers,
		mergedAudioURL,
		merge,
		deleteLayer,
		layerCount
	} = supportersliedStore;

	if (audioLayers.length > 0 && audioLayers.length < 3) {
		const player = React.createRef();

		return (
			<>
				<Navigation href={'/supporterslied'} />
				<div className={styles.contentGrid}>
					<div className={styles.content}>
						<div className={styles.secondContainer}>
							<div className={styles.title}>
								<TitleMiddle keyValue={uuid()} text='Supporterslied.' />
							</div>
							<div className={styles.aantalFragmenten}>
								<p>{layerCount} / 10 fragmenten</p>
							</div>
							<div className={styles.fragmenten}>
								{audioLayers.map((layer, index) => (
									<div className={styles.fragmentCont}>
										<audio
											className={styles.customAudio}
											src={layer}
											key={index}
											controls
										></audio>
										<button
											className={styles.deleteCont}
											onClick={() => {
												deleteLayer(index);
												console.log(index);
												if (audioLayers.length > 1) {
													merge();
												}
											}}
										>
											<span className={styles.delete}></span>
										</button>
									</div>
								))}
							</div>
							<div className={styles.addCont}>
								<Link to={'/supporterslied/opnemen'}>
									<img
										className={styles.roundBtn}
										src='../assets/img/btn_add.svg'
										alt=''
									/>
								</Link>
								<p>Maak een nieuw geluidsfragment</p>
							</div>
							<div className={styles.buttons}>
								<div
									className={styles.playAll}
									onClick={() => {
										player.current.src = mergedAudioURL;
										player.current.play();
									}}
								>
									<Button
										keyValue={uuid()}
										label={'Speel alle lagen'}
										color={'secondary'}
										link={'noLink'}
									/>
									<audio
										className={styles.defaultAudio}
										ref={player}
										controls
									></audio>
								</div>
								<Button
									keyValue={uuid()}
									label={'Deel'}
									color={'primary'}
									link={`/supporterslied/resultaat`}
								/>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}

	if (audioLayers.length === 3) {
		const player = React.createRef();
		console.log('3 layers!');

		return (
			<>
				<Navigation href={'/supporterslied'} />
				<div className={styles.contentGrid}>
					<div className={styles.content}>
						<div className={styles.thirdContainer}>
							<div className={styles.title}>
								<TitleMiddle keyValue={uuid()} text='Supporterslied.' />
							</div>
							<div className={styles.aantalFragmenten}>
								<p>{layerCount} / 10 fragmenten</p>
							</div>
							<div className={styles.fragmenten}>
								{audioLayers.map((layer, index) => (
									<div className={styles.fragmentCont}>
										<audio
											className={styles.customAudio}
											src={layer}
											key={index}
											controls
										></audio>
										<button
											className={styles.deleteCont}
											onClick={() => {
												deleteLayer(index);
												console.log(index);
											}}
										>
											<span className={styles.delete}></span>
										</button>
									</div>
								))}
							</div>
							<div className={styles.buttons}>
								<div
									className={styles.playAll}
									onClick={() => {
										player.current.src = mergedAudioURL;
										player.current.play();
									}}
								>
									<Button
										keyValue={uuid()}
										label={'Speel alle lagen'}
										color={'secondary'}
										link={'noLink'}
									/>
									<audio
										className={styles.defaultAudio}
										ref={player}
										controls
									></audio>
								</div>
								<Button
									keyValue={uuid()}
									label={'Deel'}
									color={'primary'}
									link={`/supporterslied/resultaat`}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* 
				<Navigation href={'/supporterslied'} />
				<h1>Jouw compositie</h1>
				<p>{layerCount} / 10</p>
				{audioLayers.map((layer, index) => (
					<>
						<audio
							className='audioplayer'
							src={layer}
							key={index}
							controls
						></audio>
						<button
							onClick={() => {
								deleteLayer(index);
								console.log(index);
							}}
						>
							Delete Layer
						</button>
					</>
				))}
				<button
					onClick={() => {
						player.current.src = mergedAudioURL;
						player.current.play();
					}}
				>
					Play all
				</button>
				<audio className='audioplayer' ref={player} controls></audio>
				<Link to={`/supporterslied/resultaat`}>Delen</Link> */}
			</>
		);
	}

	return (
		<>
			<Navigation href={'/supporterslied'} />
			<div className={styles.contentGrid}>
				<div className={styles.content}>
					<div className={styles.firstContainer}>
						<div className={styles.title}>
							<TitleMiddle keyValue={uuid()} text='Supporterslied.' />
						</div>
						<div className={styles.addCont}>
							<Link to={'/supporterslied/opnemen'}>
								<img
									className={styles.roundBtn}
									src='../assets/img/btn_add.svg'
									alt=''
								/>
							</Link>
							<p>Maak een nieuw geluidsfragment</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default inject(`supportersliedStore`)(observer(OverzichtSupporterslied));
