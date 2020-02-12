import React from 'react';
import Recorder from '../components/Recorder';
import { inject, observer } from 'mobx-react';

import { ROUTES } from '../constants';
import { Link } from 'react-router-dom';

import Navigation from '../components/Navigation';

const AudioInput = ({ supportersliedStore }) => {
	const { clearAudio } = supportersliedStore;
	return (
		<>
			<div onClick={() => clearAudio()}>
				<Navigation href={'/supporterslied/overzicht'} />
			</div>
			<Recorder layer='One'></Recorder>
		</>
	);
};

export default inject(`supportersliedStore`)(observer(AudioInput));
