import React from 'react';
import { inject, observer } from 'mobx-react';

import { ROUTES } from '../constants';
import { Link } from 'react-router-dom';

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
				<h1>Jouw compositie</h1>
				<Link to={`${ROUTES.supporterslied}/opnemen`}>Voeg toe +</Link>
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
			</>
		);
	}

	if (audioLayers.length === 10) {
		const player = React.createRef();

		return (
			<>
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
			</>
		);
	}

	return (
		<>
			<h1>Jouw compositie</h1>
			<Link to={`${ROUTES.supporterslied}/opnemen`}>Voeg toe +</Link>
		</>
	);
};

export default inject(`supportersliedStore`)(observer(OverzichtSupporterslied));
