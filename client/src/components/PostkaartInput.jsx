import React from 'react';

const PostkaartInput = ({ handleInputChange }) => {
	let inputRef = React.createRef();

	return (
		<div>
			<textarea
				ref={inputRef}
				name=''
				id=''
				cols='30'
				rows='10'
				onChange={() => {
					handleInputChange(inputRef.current.value);
				}}
			></textarea>
		</div>
	);
};

export default PostkaartInput;
