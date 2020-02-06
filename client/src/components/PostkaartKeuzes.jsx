import React from 'react';

const PostkaartKeuzes = ({ doelgroep, gekozenKaart }) => {
	return (
		<>
			<h1>Postkaart {doelgroep}</h1>
			<p>Wat wens jij de {doelgroep} toe?</p>
			<div onClick={() => gekozenKaart(`${doelgroep}1`)}>
				<div
					style={{ backgroundColor: 'yellow', height: '2rem', width: '2rem' }}
				></div>
			</div>
			<div onClick={() => gekozenKaart(`${doelgroep}2`)}>
				<div
					style={{ backgroundColor: 'red', height: '2rem', width: '2rem' }}
				></div>
			</div>
			<div onClick={() => gekozenKaart(`${doelgroep}3`)}>
				<div
					style={{ backgroundColor: 'blue', height: '2rem', width: '2rem' }}
				></div>
			</div>
		</>
	);
};

export default PostkaartKeuzes;
