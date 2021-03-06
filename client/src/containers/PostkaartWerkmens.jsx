import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';
import PostkaartInput from '../components/PostkaartInput';
import PostkaartKeuzes from '../components/PostkaartKeuzes';
import Navigation from '../components/Navigation';

const PostkaartWerkmens = () => {
	let gekozenTemplate = null;
	let ingevoerdTekstje = '';

	const gekozenKaart = kaart => {
		console.log(kaart);
		gekozenTemplate = kaart;
	};

	const handleInputChange = input => {
		console.log(input);
		ingevoerdTekstje = input;
	};

	const verzend = input => {
		if (ingevoerdTekstje.length > 0 && gekozenTemplate !== null) {
			console.log('kaartje ready for verzending');
			console.log(gekozenTemplate);
			console.log(ingevoerdTekstje);
		} else {
			console.log('kaartje not yet complete');
		}
	};

	return (
		<>
			<Navigation href={'/postkaartje'} />
			<div>
				<PostkaartKeuzes doelgroep={'werkmens'} gekozenKaart={gekozenKaart} />
				<PostkaartInput handleInputChange={handleInputChange} />
				<button onClick={verzend}>Verzend</button>
			</div>
		</>
	);
};

export default PostkaartWerkmens;
