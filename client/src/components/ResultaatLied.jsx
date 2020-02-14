import React from 'react';
import { inject, observer } from 'mobx-react';
import audioStyles from '../containers/OverzichtSupporterslied.module.css';
import stylesResultaatTap from './ResultaatTap.module.css';
import stylesUI from '../styles/uiControls.module.css';

import Button from '../components/Button';
import * as uuid from 'uuid/v4';

import TitleMiddle from '../components/TitleMiddle';
import Navigation from '../components/Navigation';

const ResultaatLied = ({ supportersliedStore }) => {
	const { mergedAudioURL } = supportersliedStore;
	const result = React.createRef();
	const download = React.createRef();
	const canvas = React.createRef();
	const linkRef = React.createRef();

	const copyLink = e => {
		linkRef.current.select();
		document.execCommand('copy');
		e.target.focus();
		// alert('Copied the text: ' + link.value);
	};

	return (
		<>
			<audio
				className={audioStyles.defaultAudio}
				src={mergedAudioURL}
				controls
			></audio>
			<div className={stylesResultaatTap.containerGrid}>
				<div className={stylesResultaatTap.nav}>
					<Navigation href={'/supporterslied/overzicht'} />
				</div>
				<div className={stylesResultaatTap.content}>
					<section className={stylesResultaatTap.resultaatCont}>
						<div className={stylesResultaatTap.title}>
							<TitleMiddle keyValue={uuid()} text='Supporterslied' />
						</div>
						<div className={stylesResultaatTap.resultImgCont}>
							<img
								className={stylesResultaatTap.resultImg}
								ref={result}
								src='../assets/img/resultaat_supporterslied@2x.png'
								alt='resultaat'
							/>
						</div>
						<div className={stylesResultaatTap.shareText}>
							<button
								className={stylesResultaatTap.linkCopyBtn}
								onClick={copyLink}
							>
								Kopieer link
							</button>
							<div className={stylesResultaatTap.deelText}>
								<p className={stylesResultaatTap.textVrienden}>
									Deel deze challenge met je vrienden!
								</p>
								<textarea
									readOnly
									className={stylesResultaatTap.shareLink}
									ref={linkRef}
									name=''
									id=''
									cols='50'
									rows='1'
								>
									onzespelen.herokuapp.com/supporterslied
								</textarea>
							</div>
						</div>
						<div className={stylesResultaatTap.buttonsCont}>
							<button
								className={stylesResultaatTap.downloadBtn}
								onClick={() => {
									download.current.click();
								}}
							>
								<Button
									keyValue={uuid()}
									color={'primary'}
									label={'Downloaden >'}
								/>
								<a
									className={stylesUI.visuallyHidden}
									ref={download}
									download='supporterslied.mp3'
									href={mergedAudioURL}
									title='supporterslied'
								></a>
							</button>
							<Button
								keyValue={uuid()}
								color={'secondary'}
								label={'Terug naar home >'}
								link={'/'}
							/>
						</div>
					</section>
				</div>
				<canvas
					className={`${stylesUI.visuallyHidden} ${stylesResultaatTap.canvas}`}
					ref={canvas}
					width={1200}
					height={1000}
				></canvas>
			</div>
		</>
	);
};

export default inject(`supportersliedStore`)(observer(ResultaatLied));
