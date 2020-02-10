import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';

import stylesUI from '../styles/uiControls.module.css';

const Outline = ({ style }) => {
	return <div className={`btn ${stylesUI.btnOutline}`} style={style}></div>;
};

class Button extends Component {
	btnWidth;
	btnHeight;
	divStyle;

	constructor(props) {
		super(props);
		this.key = props.keyValue;
		this.link = props.link;
		this.btnLabel = props.label;
		this.setBtnColor(props.color);
		this.buttonRef = React.createRef();
		this.state = {
			divStyle: {
				width: `0px`,
				height: `0px`,
				marginTop: `0px`
			}
		};
	}

	setBtnColor = color => {
		if (color === 'primary') {
			this.btnColor = stylesUI.primary;
		} else {
			this.btnColor = stylesUI.secondary;
		}
	};

	componentDidMount = () => {
		const button = document.querySelector(`.linkEl${this.key}`);
		this.btnHeight = button.getBoundingClientRect().height;
		this.btnWidth = button.getBoundingClientRect().width;
		console.log(button.getBoundingClientRect());
		this.renderOutlineStyle();
		window.addEventListener('resize', this.getDimensions);
	};

	getDimensions = () => {
		const button = document.querySelector(`.linkEl${this.key}`);
		this.btnHeight = button.getBoundingClientRect().height;
		this.btnWidth = button.getBoundingClientRect().width;
		this.renderOutlineStyle();
	};

	renderOutlineStyle = () => {
		this.setState({
			divStyle: {
				width: `${this.btnWidth}px`,
				height: `${this.btnHeight}px`,
				marginTop: `-${this.btnHeight + 5}px`,
				marginLeft: '0.5rem',
				transition: 'margin-top 0.1s ease-in-out, margin-left 0.1s ease-in-out'
			}
		});
	};

	handleEnter = () => {
		console.log('in');
		this.setState({
			divStyle: {
				width: `${this.btnWidth}px`,
				height: `${this.btnHeight}px`,
				marginTop: `-${this.btnHeight}px`,
				marginLeft: '0',
				transition: 'margin-top 0.1s ease-in-out, margin-left 0.1s ease-in-out'
			}
		});
	};

	render = () => {
		return (
			<div
				className={stylesUI.buttonCont}
				onMouseOver={this.handleEnter}
				onMouseLeave={this.renderOutlineStyle}
			>
				<Link to={this.link}>
					<span
						className={`linkEl${this.key} ${stylesUI.button} ${this.btnColor}`}
					>
						{this.btnLabel}
					</span>
					<Outline style={this.state.divStyle} />
				</Link>
			</div>
		);
	};
}

export default Button;
