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
	windowWidth;
	windowHeight;

	constructor(props) {
		super(props);
		this.key = props.keyValue;
		this.text = props.text;
		this.titleRef = React.createRef();
		this.state = {
			divStyle: {
				marginTop: '0'
			}
		};
	}

	componentDidMount = () => {
		setTimeout(() => {
			this.getDimensions();
		}, 100);
		window.addEventListener('resize', this.getDimensions);
	};

	getDimensions = () => {
		if (this.titleRef) {
			const title = this.titleRef;
			this.titleHeight = title.getBoundingClientRect().height;
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
				marginTop: `-${this.titleHeight + offsetVertical}px`,
				marginLeft: `${offsetHorizontal}px`
			}
		});
	};

	render = () => {
		return (
			<div>
				<h1
					ref={e => (this.titleRef = e)}
					className={`titelEl${this.key} ${stylesUI.titleResponsive}`}
				>
					{this.text}
				</h1>
				<Outline text={this.text} style={this.state.divStyle} />
			</div>
		);
	};
}

export default Title;
