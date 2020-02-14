import React from 'react';
import styles from './PostkaartKeuzes.module.css';
import Button from '../components/Button';
import * as uuid from 'uuid/v4';

const PostkaartInput = ({ handleInputChange }) => {
	let inputRef = React.createRef();

	return (
		<div className={styles.inputCont}>
			<div className={styles.textInput}>
				<p>Schrijf een gepersonaliseerd tekstje</p>
				<textarea
					className={styles.kaartjesInput}
					ref={inputRef}
					name=''
					id=''
					cols='90'
					rows='8'
					onChange={() => {
						handleInputChange(inputRef.current.value);
					}}
				></textarea>
			</div>
			<div>
				<Button
					keyValue={uuid()}
					color={'primary'}
					link={'/postkaartje/resultaat'}
					label={'Verzend kaartje'}
				/>
			</div>
		</div>
	);
};

export default PostkaartInput;
