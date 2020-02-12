import React from 'react';
import { inject, observer } from 'mobx-react';
import Navigation from '../components/Navigation';

const ResultaatLied = ({ supportersliedStore }) => {
	const { mergedAudioURL } = supportersliedStore;

	return (
		<>
			<Navigation href={'/supporterslied/overzicht'} />
			<section>
				<h1>Supporterslied.</h1>
				<audio className='audioplayer' src={mergedAudioURL} controls></audio>

				<a
					download='supporterslied.mp3'
					href={mergedAudioURL}
					title='supporterslied'
				>
					download
				</a>
			</section>
		</>
	);
};

export default inject(`supportersliedStore`)(observer(ResultaatLied));
