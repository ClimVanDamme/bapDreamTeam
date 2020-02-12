import React from 'react';
import { inject, observer } from 'mobx-react';

import Button from '../components/Button';
import * as uuid from 'uuid/v4';
import Title from '../components/Title';

import { ROUTES } from '../constants';
import { Link } from 'react-router-dom';

import stylesOverzichtSupporterslied from './OverzichtSupporterslied.module.css';
import TitleMiddle from '../components/TitleMiddle';

import Navigation from '../components/Navigation';

const OverzichtSupporterslied = ({ supportersliedStore }) => {
	const {
		audioLayers,
		mergedAudioURL,
		deleteLayer,
		layerCount
	} = supportersliedStore;

	if (audioLayers.length > 0 && audioLayers.length < 10) {
		const player = React.createRef();

		return (
			<>
				<Navigation href={'/supporterslied'} />
				<h1>Jouw compositie</h1>
				<Link to={`${ROUTES.supporterslied}/opnemen`}>
					<img src='../assets/img/plus_knop@2x.png' alt='voeg toe +' />
				</Link>
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
				<Link to={`/supporterslied/resultaat`}>Delen</Link>
			</>
		);
	}

	if (audioLayers.length === 10) {
		const player = React.createRef();

		return (
			<>
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
				<Link to={`/supporterslied/resultaat`}>Delen</Link>
			</>
		);
	}

	return (
		<>
			<Navigation href={'/supporterslied'} />
			<TitleMiddle keyValue={uuid()} text='Supporterslied.' />
			<p>Maak een nieuw geluidsfragment</p>
			<Button
				className={stylesOverzichtSupporterslied.roundButton}
				keyValue={uuid()}
				color={'secondary'}
				link={`${ROUTES.supporterslied}/opnemen`}
				label={'+'}
			/>
		</>
	);
};

export default inject(`supportersliedStore`)(observer(OverzichtSupporterslied));
