import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { useLocation } from 'react-router-dom';

import stylesResultaatTap from './ResultaatTap.module.css';
import stylesUI from '../styles/uiControls.module.css';

import Button from '../components/Button';
import * as uuid from 'uuid/v4';

import TitleMiddle from '../components/TitleMiddle';
import Navigation from '../components/Navigation';

const ResultaatTap = ({ tapwedstrijdStore }) => {
	const { maxTaps, finalTime } = tapwedstrijdStore;

	let renderedImageURL = ``;
	const canvas = React.createRef();
	const result = React.createRef();
	const download = React.createRef();
	const linkRef = React.createRef();

	const copyLink = e => {
		linkRef.current.select();
		document.execCommand('copy');
		e.target.focus();
		// alert('Copied the text: ' + link.value);
	};

	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
		initiateCanvas();
	}, [pathname]);

	const setDPI = (canvas, dpi) => {
		// Set up CSS size.
		canvas.style.width = canvas.style.width || canvas.width + 'px';
		canvas.style.height = canvas.style.height || canvas.height + 'px';

		// Get size information.
		const scaleFactor = dpi / 96;
		const width = parseFloat(canvas.style.width);
		const height = parseFloat(canvas.style.height);

		// Backup the canvas contents.
		const oldScale = canvas.width / width;
		const backupScale = scaleFactor / oldScale;
		const backup = canvas.cloneNode(false);
		backup.getContext('2d').drawImage(canvas, 0, 0);

		// Resize the canvas.
		const ctx = canvas.getContext('2d');
		canvas.width = Math.ceil(width * scaleFactor);
		canvas.height = Math.ceil(height * scaleFactor);

		// Redraw the canvas image and scale future draws.
		ctx.setTransform(backupScale, 0, 0, backupScale, 0, 0);
		ctx.drawImage(backup, 0, 0);
		ctx.setTransform(scaleFactor, 0, 0, scaleFactor, 0, 0);
	};

	const initiateCanvas = () => {
		// console.log("uitgevoerd!");
		// console.log(canvas);
		setDPI(canvas.current, 144);
		const ctx = canvas.current.getContext(`2d`);

		//ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);

		const bg = new Image();

		const scaleToFit = (img, canvas, ctx) => {
			// get the scale
			console.log(canvas, 'dit is het canvas');
			const scale = Math.min(
				parseInt(canvas.style.width, 10) / img.width,
				parseInt(canvas.style.height, 10) / img.height
			);
			// get the top left position of the image
			const x = parseInt(canvas.style.width, 10) / 2 - (img.width / 2) * scale;
			const y =
				parseInt(canvas.style.height, 10) / 2 - (img.height / 2) * scale;
			console.log('X', x, 'Y', y);
			ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
		};

		if (maxTaps === 100) {
			if (finalTime <= 8.5) {
				bg.src = '../assets/img/result_100_3stars.png';
			}

			if (finalTime > 8.5 && finalTime <= 11) {
				bg.src = '../assets/img/result_100_2stars.png';
			}

			if (finalTime > 11) {
				bg.src = '../assets/img/result_100_1star.png';
			}
		}

		if (maxTaps === 200) {
			if (finalTime <= 17) {
				bg.src = '../assets/img/result_200_3stars.png';
			}

			if (finalTime > 17 && finalTime <= 20) {
				bg.src = '../assets/img/result_200_2stars.png';
			}

			if (finalTime > 20) {
				bg.src = '../assets/img/result_200_1star.png';
			}
		}

		if (maxTaps === 400) {
			if (finalTime <= 33) {
				bg.src = '../assets/img/result_400_3stars.png';
			}

			if (finalTime > 33 && finalTime <= 38) {
				bg.src = '../assets/img/result_400_2stars.png';
			}

			if (finalTime > 38) {
				bg.src = '../assets/img/result_400_1star.png';
			}
		}

		bg.onload = () => {
			//ctx.drawImage(bg, 0, 0);
			scaleToFit(bg, canvas.current, ctx);

			ctx.fillStyle = 'white';
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 2;

			ctx.font = 'italic bold 50px Roboto Condensed';

			ctx.fillText(
				`${finalTime} SEC`,
				parseInt(canvas.current.style.width, 10) / 2 - 75,
				parseInt(canvas.current.style.height, 10) / 2 - 45
			);
			ctx.strokeText(
				`${finalTime} SEC`,
				parseInt(canvas.current.style.width, 10) / 2 - 75,
				parseInt(canvas.current.style.height, 10) / 2 - 45
			);

			ctx.fill();
			ctx.stroke();

			renderedImageURL = canvas.current.toDataURL(`image/png`);
			result.current.setAttribute(`src`, renderedImageURL);
			download.current.setAttribute(`href`, renderedImageURL);
		};
	};

	return (
		<>
			<div className={stylesResultaatTap.containerGrid}>
				<div className={stylesResultaatTap.nav}>
					<Navigation href={'/tapstrijd/100'} />
				</div>
				<div className={stylesResultaatTap.content}>
					<section className={stylesResultaatTap.resultaatCont}>
						<div className={stylesResultaatTap.title}>
							<TitleMiddle keyValue={uuid()} text='Tapstrijd.' />
						</div>
						<div className={stylesResultaatTap.resultImgCont}>
							<img
								className={stylesResultaatTap.resultImg}
								ref={result}
								src=''
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
								<div className={stylesResultaatTap.areaCont}>
									<textarea
										readOnly
										className={stylesResultaatTap.shareLink}
										ref={linkRef}
										name=''
										id=''
										cols=''
										rows='1'
									>
										onzespelen.herokuapp.com/tapstrijd
									</textarea>
								</div>
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
									download='score.jpg'
									href='/'
									title='score'
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

export default inject(`tapwedstrijdStore`)(observer(ResultaatTap));
