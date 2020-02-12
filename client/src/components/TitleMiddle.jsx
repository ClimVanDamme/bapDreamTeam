import React, { Component } from 'react';

import stylesUI from '../styles/uiControls.module.css';

const Outline = ({ text, style }) => {
	return (
		<div className={stylesUI.titleMiddleOutline} style={style}>
			{text}
		</div>
	);
};

class TitleMiddle extends Component {
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
		const offsetHorizontal = this.windowWidth * 0.0015;
		const offsetVertical = this.windowHeight * 0.0025;
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
				<h2
					ref={e => (this.titleRef = e)}
					className={`titelEl${this.key} ${stylesUI.titleMiddleResponsive} middleTitle`}
				>
					{this.text}
				</h2>
				<Outline text={this.text} style={this.state.divStyle} />
			</div>
		);
	};
}

export default TitleMiddle;
