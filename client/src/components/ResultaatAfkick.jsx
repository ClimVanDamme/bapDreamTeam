import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Navigation from '../components/Navigation';

const ResultaatAfkick = ({ belofteStore }) => {
	const { resultTextAfkick } = belofteStore;

	let renderedImageURL = ``;
	const canvas = React.createRef();
	const result = React.createRef();
	const download = React.createRef();

	useEffect(() => {
		initiateCanvas();
	});

	const initiateCanvas = () => {
		console.log('uitgevoerd!');
		console.log(canvas);

		const ctx = canvas.current.getContext(`2d`);
		ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
		ctx.fillStyle = `#FF0000`;
		ctx.fillRect(0, 0, 80, 80);
		ctx.fillStyle = `#000000`;
		ctx.font = `30px Arial`;
		ctx.fillText(resultTextAfkick, 10, 50);

		renderedImageURL = canvas.current.toDataURL(`image/png`);
		result.current.setAttribute(`src`, renderedImageURL);
		download.current.setAttribute(`href`, renderedImageURL);
	};

	return (
		<>
			<Navigation href={'/supportificaat/afkick'} />
			<section>
				<h1>Belofte.</h1>
				<p>{resultTextAfkick}</p>

				<canvas ref={canvas} width={640} height={425}></canvas>

				<img ref={result} src='' alt='resultaat' />

				<a ref={download} download='resultaat.jpg' href='/' title='resultaat'>
					download
				</a>
			</section>
		</>
	);
};

export default inject(`belofteStore`)(observer(ResultaatAfkick));
