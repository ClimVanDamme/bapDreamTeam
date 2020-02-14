import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import stylesUI from '../styles/uiControls.module.css';

const Outline = ({ style }) => {
	return <div className={`btn ${stylesUI.btnOutline}`} style={style}></div>;
};

class Button extends Component {
	btnWidth;
	btnHeight;
	divStyle;
	windowWidth;
	windowHeight;

	constructor(props) {
		super(props);
		this.key = props.keyValue;
		this.link = props.link;
		this.btnLabel = props.label;
		this.setBtnColor(props.color);
		this.state = {
			divStyle: {
				width: `0px`,
				height: `0px`,
				marginLeft: `0px`,
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
		setTimeout(() => {
			this.getDimensions();
		}, 100);
		window.addEventListener('resize', this.getDimensions);
	};

	getDimensions = () => {
		if (this.buttonRef) {
			const button = this.buttonRef;
			this.btnHeight = button.getBoundingClientRect().height;
			this.btnWidth = button.getBoundingClientRect().width;
			this.windowWidth = window.innerWidth;
			this.windowHeight = window.innerHeight;
			this.renderOutlineStyle();
		}
	};

	renderOutlineStyle = () => {
		const offsetHorizontal = this.windowWidth * 0.0035;
		const offsetVertical = this.windowHeight * 0.0035;
		this.setState({
			divStyle: {
				width: `${this.btnWidth}px`,
				height: `${this.btnHeight}px`,
				marginTop: `-${this.btnHeight + offsetVertical}px`,
				marginLeft: `${offsetHorizontal}px`,
				marginRight: '0',
				transition: 'margin-top 0.1s ease-in-out, margin-left 0.1s ease-in-out'
			}
		});
	};

	handleEnter = () => {
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
		if (this.link !== 'noLink') {
			return (
				<div
					key={this.key}
					className={stylesUI.buttonCont}
					onMouseOver={this.handleEnter}
					onMouseLeave={this.renderOutlineStyle}
				>
					<Link to={this.link}>
						<span
							ref={e => (this.buttonRef = e)}
							className={`linkEl${this.key} ${stylesUI.button} ${this.btnColor}`}
						>
							{this.btnLabel}
						</span>
						<Outline style={this.state.divStyle} />
					</Link>
				</div>
			);
		} else {
			return (
				<div
					key={this.key}
					className={stylesUI.buttonCont}
					onMouseOver={this.handleEnter}
					onMouseLeave={this.renderOutlineStyle}
				>
					<div>
						<span
							ref={e => (this.buttonRef = e)}
							className={`linkEl${this.key} ${stylesUI.button} ${this.btnColor}`}
						>
							{this.btnLabel}
						</span>
						<Outline style={this.state.divStyle} />
					</div>
				</div>
			);
		}
	};
}

export default Button;
