import React, { Component } from 'react';
import HomeChallenge from '../components/HomeChallenge';
import stylesHome from './Home.module.css';

import Button from '../components/Button';
import Title from '../components/Title';

import * as uuid from 'uuid/v4';

import { CSSTransitionGroup } from 'react-transition-group';

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

class Home extends Component {
	vh;
	vw;

	constructor(props) {
		super(props);
		this.latest = React.createRef();
		this.headerGrid = React.createRef();
		this.vh = window.innerHeight * 0.01;
	}

	componentDidMount = async () => {
		this.getDimensions();
		window.addEventListener('resize', this.getDimensions);
	};

	getDimensions = () => {
		this.vh = (window.innerHeight - 100) * 0.01;
		this.vw = (window.innerWidth - 100) * 0.01;
		document.documentElement.style.setProperty('--vh', `${this.vh}px`);
		document.documentElement.style.setProperty('--vw', `${this.vw}px`);
	};

	scrollToLatest = () => {
		scrollToRef(this.latest);
	};

	render = () => {
		return (
			<>
				<header ref={this.headerGrid} className={stylesHome.headerGrid}>
					<div className={stylesHome.headerTitle}>
						<Title
							keyValue={uuid()}
							text={[
								'De Spelen ',
								<br />,
								'zijn van ',
								<span className={stylesHome.headerO}>o</span>,
								<span className={stylesHome.headerN}>n</span>,
								<span className={stylesHome.headerS}>s</span>
							]}
						/>
					</div>
					<div className={stylesHome.headerText}>
						<p>
							De Belgische atleten geven het beste van zichzelf op de Spelen in
							Tokio. Ga de Olympische uitdagingen aan en daag zoveel mogelijk
							mensen uit. Toon zo dat we achter Team Belgium staan!
						</p>
						<div className={stylesHome.headerBtn}>
							<div onClick={this.scrollToLatest}>
								<Button
									keyValue={uuid()}
									label={'ga naar laatste uitdaging'}
									color={'secondary'}
									link={''}
								/>
							</div>
						</div>
					</div>

					<picture className={stylesHome.headerImg}>
						<source
							type='image/png'
							srcSet='  
			  assets/img/header_158.png 158w,
			  assets/img/header_243.png 243w,
			  assets/img/header_310.png 310w,
			  assets/img/header_370.png 370w,
			  assets/img/header_423.png 423w,
			  assets/img/header_469.png 469w,
			  assets/img/header_512.png 512w,
			  assets/img/header_553.png 553w,
			  assets/img/header_593.png 593w,
			  assets/img/header_631.png 631w,
			  assets/img/header_668.png 668w,
			  assets/img/header_704.png 704w,
			  assets/img/header_737.png 737w,
			  assets/img/header_770.png 770w,
			  assets/img/header_801.png 801w,
			  assets/img/header_833.png 833w,
			  assets/img/header_863.png 863w,
			  assets/img/header_895.png 895w,
			  assets/img/header_922.png 922w,
			  assets/img/header_938.png 938w'
						/>
						<img
							className={stylesHome.headerImg}
							src='..assets/img/header_469.png'
							alt='sporza_atleten_home'
						/>
					</picture>

					<div className={stylesHome.headerScroll}>
						<p
							className={stylesHome.scrollText}
							style={{ textAlign: 'center', textTransform: 'uppercase' }}
						>
							scroll verder
						</p>
						<p className={stylesHome.scrollAnimation}>﹀</p>
					</div>
				</header>
				<section className={stylesHome.challengesWrapper}>
					<div className={stylesHome.challengesContent}>
						<CSSTransitionGroup
							transitionName='example'
							transitionAppear={true}
							transitionAppearTimeout={500}
							transitionEnter={false}
							transitionLeave={false}
						>
							<HomeChallenge
								challenge={'supportificaat'}
								direction={'links'}
								unlockDate={'23 juli'}
							/>
						</CSSTransitionGroup>
						<CSSTransitionGroup
							transitionName='example'
							transitionAppear={true}
							transitionAppearTimeout={500}
							transitionEnter={false}
							transitionLeave={false}
						>
							<HomeChallenge
								challenge={'supporterslied'}
								direction={'links'}
								unlockDate={'26 juli'}
							/>
						</CSSTransitionGroup>
						<CSSTransitionGroup
							transitionName='example'
							transitionAppear={true}
							transitionAppearTimeout={500}
							transitionEnter={false}
							transitionLeave={false}
						>
							<HomeChallenge
								challenge={'postkaartje'}
								direction={'rechts'}
								unlockDate={'29 juli'}
							/>
						</CSSTransitionGroup>
						<CSSTransitionGroup
							transitionName='example'
							transitionAppear={true}
							transitionAppearTimeout={500}
							transitionEnter={false}
							transitionLeave={false}
						>
							<div ref={this.latest}>
								<HomeChallenge
									challenge={'tapstrijd'}
									direction={'rechts'}
									unlockDate={'1 augustus'}
								/>
							</div>
						</CSSTransitionGroup>
						<CSSTransitionGroup
							transitionName='example'
							transitionAppear={true}
							transitionAppearTimeout={500}
							transitionEnter={false}
							transitionLeave={false}
						>
							<HomeChallenge
								challenge={'smoothie'}
								direction={'links'}
								unlockDate={'4 augustus'}
							/>
						</CSSTransitionGroup>
						<CSSTransitionGroup
							transitionName='example'
							transitionAppear={true}
							transitionAppearTimeout={500}
							transitionEnter={false}
							transitionLeave={false}
						>
							<HomeChallenge
								challenge={'quiz'}
								direction={'links'}
								unlockDate={'7 augustus'}
							/>
						</CSSTransitionGroup>
					</div>
				</section>
			</>
		);
	};
}

export default Home;
