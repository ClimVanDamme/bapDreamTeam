import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';
import { inject, observer } from 'mobx-react';
import PostkaartInput from '../components/PostkaartInput';
import PostkaartKeuzes from '../components/PostkaartKeuzes';
import Navigation from '../components/Navigation';
import styles from './PostkaartStudent.module.css';

const PostkaartStudent = ({ postkaartStore }) => {
	let {
		choosenTemplate,
		cardComment,
		renderCardResult,
		errorMessage,
		createErrorAlert,
		checkVal
	} = postkaartStore;

	const gekozenKaart = kaart => {
		console.log(kaart);
		choosenTemplate = kaart;
	};

	const handleInputChange = input => {
		//console.log(input);
		checkVal(input);
	};

	const verzend = input => {
		if (cardComment !== null && choosenTemplate !== null) {
			createErrorAlert('');
			console.log('kaartje ready for verzending');
			renderCardResult(choosenTemplate, cardComment);
		}
		if (cardComment === null || choosenTemplate === null) {
			console.log('niks ingevuld');
			createErrorAlert(
				'Gelieve een postkaart te selecteren en een bericht mee te geven.'
			);
		}
	};

	if (errorMessage != '') {
		return (
			<div>
				<PostkaartKeuzes doelgroep={'student'} gekozenKaart={gekozenKaart} />
				<PostkaartInput handleInputChange={handleInputChange} />
				<p>{errorMessage}</p>
			</div>
		);
	}

	return (
		<>
			<Navigation href={'/postkaartje'} />
			<div className={styles.contentContainer}>
				<div className={styles.content}>
					<PostkaartKeuzes doelgroep={'student'} gekozenKaart={gekozenKaart} />
					<PostkaartInput handleInputChange={handleInputChange} />
				</div>
			</div>
		</>
	);
};

export default inject(`postkaartStore`)(observer(PostkaartStudent));
