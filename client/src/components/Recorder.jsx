import React from 'react';
import { PropTypes, inject, observer } from 'mobx-react';

import { ROUTES } from '../constants';
import { Link } from 'react-router-dom';

import styles from '../containers/OverzichtSupporterslied.module.css';

import TitleMiddle from '../components/TitleMiddle';
import * as uuid from 'uuid/v4';
import Button from '../components/Button';

const Recorder = ({ supportersliedStore, layer }) => {
	const {
		createdMediaRecorder,
		audioCurrent,
		addAudioLayer,
		clearAudio,
		merge,
		autoStop,
		resetTimeout,
		timeLeft,
		stopCountdown
	} = supportersliedStore;

	const options = { mimeType: 'audio/webm' };
	let recordedChunks = [];

	const stopRec = () => {
		if (supportersliedStore.createdMediaRecorder.state === 'recording') {
			clearTimeout(autoStop);
			stopCountdown();
			supportersliedStore.toggleRecording();
			supportersliedStore.createdMediaRecorder.stop();
		}
	};

	const initiateRec = () => {
		resetTimeout(setTimeout(stopRec, 5000));
		supportersliedStore.toggleRecording();
		navigator.mediaDevices
			.getUserMedia({ audio: true, video: false })
			.then(handleSuccess);
	};

	const handleSuccess = stream => {
		let mediaRecorder = new MediaRecorder(stream, options);
		mediaRecorder.addEventListener('dataavailable', e => {
			if (e.data.size > 0) {
				recordedChunks.push(e.data);
				supportersliedStore.createAudioFile(recordedChunks);
			}
		});
		mediaRecorder.start();
		supportersliedStore.setMediaRecorder(mediaRecorder);
	};

	const inputAudio = React.createRef();

	return (
		<div className={styles.contentGrid}>
			<div className={styles.content}>
				<div className={styles.recorderTitle}>
					<TitleMiddle keyValue={uuid()} text='Supporterslied.' />
				</div>
				{audioCurrent.length > 0 ? (
					<>
						{supportersliedStore.isRecording === true ? (
							<div className={styles.isRecording}>
								<p className={styles.recordingTime}>Tijd over: {timeLeft}</p>
								<img
									className={styles.recordingImg}
									src='../assets/img/micro.png'
									alt=''
								/>
								<button className={styles.stopRec} onClick={stopRec}>
									<Button
										keyValue={uuid()}
										label={'Stop'}
										color={'secondary'}
										link={'noLink'}
									/>
								</button>
							</div>
						) : (
							<div className={styles.herbeluisterCont}>
								<img
									className={styles.recordingImg}
									src='../assets/img/micro.png'
									alt=''
								/>
								<div className={styles.herbeluisterButtons}>
									<div
										onClick={() => {
											inputAudio.current.play();
											console.log('play');
										}}
									>
										<Button
											keyValue={uuid()}
											label={'Herbeluister'}
											color={'secondary'}
											link={'noLink'}
										/>
									</div>
									<div
										onClick={() => {
											initiateRec();
										}}
									>
										<Button
											keyValue={uuid()}
											label={'Opnieuw opnemen'}
											color={'secondary'}
											link={'noLink'}
										/>
									</div>
									<div
										onClick={() => {
											addAudioLayer(audioCurrent[0]);
											clearAudio();
											merge();
										}}
									>
										<Button
											keyValue={uuid()}
											label={'Fragment toevoegen'}
											color={'primary'}
											link={`${ROUTES.supporterslied}/overzicht`}
										/>
									</div>
								</div>
							</div>
						)}
						{audioCurrent.map(track => (
							<audio
								className={styles.defaultAudio}
								src={track}
								controls
								ref={inputAudio}
								key='currentLayer'
							></audio>
						))}
					</>
				) : (
					<>
						{supportersliedStore.isRecording === true ? (
							<div className={styles.isRecording}>
								<p className={styles.recordingTime}>Tijd over: {timeLeft}</p>
								<img
									className={styles.recordingImg}
									src='../assets/img/micro.png'
									alt=''
								/>
								<button className={styles.stopRec} onClick={stopRec}>
									<Button
										keyValue={uuid()}
										label={'Stop'}
										color={'secondary'}
										link={'noLink'}
									/>
								</button>
							</div>
						) : (
							<div className={styles.opnemenCont}>
								<img
									className={styles.recordingImg}
									src='../assets/img/micro.png'
									alt=''
								/>
								<button onClick={initiateRec}>
									<Button
										keyValue={uuid()}
										label={'Opnemen'}
										color={'primary'}
										link={`noLink`}
									/>
								</button>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
};

Recorder.propTypes = {
	supportersliedStore: PropTypes.observableObject.isRequired
};

export default inject(`supportersliedStore`)(observer(Recorder));
