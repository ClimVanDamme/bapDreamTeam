import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';

import stylesUI from '../styles/uiControls.module.css';

const Outline = ({ text, style }) => {
	return (
		<div className={stylesUI.titleOutline} style={style}>
			{text}
		</div>
	);
};

class Title extends Component {
	titleHeight;

	constructor(props) {
		super(props);
		this.key = props.keyValue;
		this.text = props.text;
		console.log(props.text);
		this.titleRef = React.createRef();
		this.state = {
			divStyle: {
				marginTop: '0'
			}
		};
	}

	componentDidMount = () => {
		const title = document.querySelector(`.titelEl${this.key}`);
		this.titleHeight = title.getBoundingClientRect().height;
		this.renderOutlineStyle();
		window.addEventListener('resize', this.getDimensions);
	};

	getDimensions = () => {
		const title = document.querySelector(`.titelEl${this.key}`);
		this.titleHeight = title.getBoundingClientRect().height;
		this.renderOutlineStyle();
	};

	renderOutlineStyle = () => {
		this.setState({
			divStyle: {
				marginTop: `-${this.titleHeight + 3}px`
			}
		});
		console.log(this.state.divStyle);
	};

	render = () => {
		return (
			<div>
				<h1 className={`titelEl${this.key} ${stylesUI.titleResponsive}`}>
					{this.text}
				</h1>
				<Outline text={this.text} style={this.state.divStyle} />
			</div>
		);
	};
}

export default Title;
