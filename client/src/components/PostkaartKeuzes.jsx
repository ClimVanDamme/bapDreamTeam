import React, { Component } from 'react';
import TitleMiddle from '../components/TitleMiddle';
import * as uuid from 'uuid/v4';
import styles from './PostkaartKeuzes.module.css';

class PostkaartKeuzes extends Component {
	constructor(props) {
		super(props);
		this.doelgroep = props.doelgroep;
		this.state = { kaart: '' };
		this.kaart1 = React.createRef();
		this.kaart2 = React.createRef();
		this.kaart3 = React.createRef();
	}

	setBorder = kaartje => {
		this.kaart1.current.style.filter = 'grayscale(1)';
		this.kaart2.current.style.filter = 'grayscale(1)';
		this.kaart3.current.style.filter = 'grayscale(1)';
		if (kaartje === 'kaart1') {
			this.kaart1.current.style.filter = 'grayscale(0)';
			this.setState({ kaart: 'kaart1' });
			console.log(this.kaart1.current);
		} else if (kaartje === 'kaart2') {
			this.kaart2.current.style.filter = 'grayscale(0)';
			this.setState({ kaart: 'kaart2' });
		} else if (kaartje === 'kaart3') {
			this.kaart3.current.style.filter = 'grayscale(0)';
			this.setState({ kaart: 'kaart3' });
		}
	};

	render = () => {
		return (
			<>
				<TitleMiddle keyValue={uuid()} text='Postkaartje' />
				<p>Wat wens jij de blokkende student toe?</p>
				<div className={styles.kaartjesCont}>
					<div
						onClick={() => {
							this.setBorder('kaart1');
						}}
					>
						<img
							ref={this.kaart1}
							className={styles.kaartjeImg}
							src='../assets/img/post_raak.png'
							alt=''
						/>
					</div>
					<div
						onClick={() => {
							this.setBorder('kaart2');
							this.setState({ kaart: 'kaart2' });
						}}
					>
						<img
							ref={this.kaart2}
							className={styles.kaartjeImg}
							src='../assets/img/post_lat.png'
							alt=''
						/>
					</div>
					<div
						onClick={() => {
							this.setBorder('kaart3');
							this.setState({ kaart: 'kaart3' });
						}}
					>
						<img
							ref={this.kaart3}
							className={styles.kaartjeImg}
							src='../assets/img/post_sprint.png'
							alt=''
						/>
					</div>
				</div>
			</>
		);
	};
}

export default PostkaartKeuzes;
