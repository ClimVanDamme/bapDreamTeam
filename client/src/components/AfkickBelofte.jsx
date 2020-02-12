import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const AfkickBelofte = ({ initiate, belofteStore }) => {
	const textInputOne = React.createRef();
	const textInputTwo = React.createRef();
	const textInputThree = React.createRef();
	const textInputFour = React.createRef();

	const { checkVal, errorText, textInputsAfkick } = belofteStore;
	let renderedImageURL = ``;

	// const handleSubmit = () => {
	//   console.log("in handleSubmit");
	//   const text = `Tijdens de Olympische Spelen van Tokio 2020 beloof ik ${textInputOne.current.value} plechtig dat ik twee weken niet ga ${textInputTwo.current.value} \nOok zal ik Team Belgium steunen doorheen deze tijd. \nHierbij controleert ${textInputThree.current.value} mij en moet ik ${textInputFour.current.value} wanneer ik mij niet hou aan deze belofte.`;
	//   saveResultText(text);
	// };

	if (errorText != '') {
		return (
			<>
				<Navigation href={'/supportificaat'} />
				<section>
					<h1>Welkom op Sporza.</h1>
					<form>
						<div>
							<p>Tijdens de Olympische Spelen van Tokio 2020 beloof ik </p>
							<input
								onChange={() => {
									checkVal(textInputOne);
								}}
								ref={textInputOne}
								type='text'
								id='1'
							/>
							<p> plechtig dat ik twee weken niet ga</p>
							<input
								onChange={() => {
									checkVal(textInputTwo);
								}}
								ref={textInputTwo}
								type='text'
								id='2'
							/>
							<p>
								Ook zal ik Team Belgium steunen doorheen deze tijd. Hierbij
								controleert
							</p>
							<input
								onChange={() => {
									checkVal(textInputThree);
								}}
								ref={textInputThree}
								type='text'
								id='3'
							/>
							<p>mij en moet ik</p>
							<input
								onChange={() => {
									checkVal(textInputFour);
								}}
								ref={textInputFour}
								type='text'
								id='4'
							/>
							<p>wanneer ik mij niet hou aan deze belofte.</p>
						</div>
					</form>
					<p>{errorText}</p>
					<canvas id='canvas' width={800} height={500}></canvas>

					<img id='result' src='' alt='certificate' />

					<a
						id='download'
						download='certificaat.jpg'
						href='/'
						title='certificaat'
					>
						download je certificaat
					</a>
				</section>
			</>
		);
	}

	if (
		textInputsAfkick[0] === '' ||
		textInputsAfkick[1] === '' ||
		textInputsAfkick[2] === '' ||
		textInputsAfkick[3] === ''
	) {
		return (
			<>
				<Navigation href={'/supportificaat'} />
				<section>
					<h1>Welkom op Sporza.</h1>
					<form>
						<div>
							<p>Tijdens de Olympische Spelen van Tokio 2020 beloof ik </p>
							<input
								onChange={() => {
									checkVal(textInputOne);
								}}
								ref={textInputOne}
								type='text'
								id='1'
							/>
							<p> plechtig dat ik twee weken niet ga</p>
							<input
								onChange={() => {
									checkVal(textInputTwo);
								}}
								ref={textInputTwo}
								type='text'
								id='2'
							/>
							<p>
								Ook zal ik Team Belgium steunen doorheen deze tijd. Hierbij
								controleert
							</p>
							<input
								onChange={() => {
									checkVal(textInputThree);
								}}
								ref={textInputThree}
								type='text'
								id='3'
							/>
							<p>mij en moet ik</p>
							<input
								onChange={() => {
									checkVal(textInputFour);
								}}
								ref={textInputFour}
								type='text'
								id='4'
							/>
							<p>wanneer ik mij niet hou aan deze belofte.</p>
						</div>
					</form>
					<canvas id='canvas' width={800} height={500}></canvas>

					<img id='result' src='' alt='certificate' />

					<a
						id='download'
						download='certificaat.jpg'
						href='/'
						title='certificaat'
					>
						download je certificaat
					</a>
				</section>
			</>
		);
	}

	return (
		<>
			<Navigation href={'/supportificaat'} />
			<section>
				<h1>Welkom op Sporza.</h1>
				<form>
					<div>
						<p>Tijdens de Olympische Spelen van Tokio 2020 beloof ik </p>
						<input
							onChange={() => {
								checkVal(textInputOne);
							}}
							ref={textInputOne}
							type='text'
							id='1'
						/>
						<p> plechtig dat ik twee weken niet ga</p>
						<input
							onChange={() => {
								checkVal(textInputTwo);
							}}
							ref={textInputTwo}
							type='text'
							id='2'
						/>
						<p>
							Ook zal ik Team Belgium steunen doorheen deze tijd. Hierbij
							controleert
						</p>
						<input
							onChange={() => {
								checkVal(textInputThree);
							}}
							ref={textInputThree}
							type='text'
							id='3'
						/>
						<p>mij en moet ik</p>
						<input
							onChange={() => {
								checkVal(textInputFour);
							}}
							ref={textInputFour}
							type='text'
							id='4'
						/>
						<p>wanneer ik mij niet hou aan deze belofte.</p>
					</div>
					<Link to={`/supportificaat/resultaat`}>
						<input type='submit' value='Onderteken' />
					</Link>
				</form>
				<canvas id='canvas' width={800} height={500}></canvas>

				<img id='result' src='' alt='certificate' />

				<a
					id='download'
					download='certificaat.jpg'
					href='/'
					title='certificaat'
				>
					download je certificaat
				</a>
			</section>
		</>
	);
};

// Sporza.propTypes = {
//   sporzaStore: PropTypes.observableObject.isRequired
// };

export default inject(`belofteStore`)(observer(AfkickBelofte));
