import React from 'react';
import { inject, observer } from 'mobx-react';
import Navigation from '../components/Navigation';

const VoornemenBelofte = ({ initiate }) => {
	const textInput = React.createRef();

	return (
		<>
			<Navigation href={'/supportificaat'} />
			<section>
				<h1>Welkom op Sporza.</h1>
				<form onSubmit={e => initiate(e, textInput)}>
					<label htmlFor='email'>
						Supportificaat
						<input ref={textInput} type='text' name='text' id='text=' />
					</label>
					<input type='submit' value='Onderteken' />
				</form>
				<canvas id='canvas' width={640} height={425}>
					Wow cool canvas joh
				</canvas>

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

export default inject(`supportersliedStore`)(observer(VoornemenBelofte));
