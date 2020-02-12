import React, { useRef, Component } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';

import styles from './Home.module.css';
import HomeChallenge from '../components/HomeChallenge';
import stylesLayout from '../styles/layout.module.css';
import stylesHome from './Home.module.css';

import Button from '../components/Button';
import Title from '../components/Title';

import * as uuid from 'uuid/v4';

import { CSSTransitionGroup } from 'react-transition-group';

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

class Home extends Component {
	constructor(props) {
		super(props);
		this.latest = React.createRef();
	}

	scrollToLatest = () => {
		scrollToRef(this.latest);
	};

	render = () => {
		return (
			<>
				<header className={stylesHome.headerGrid}>
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
							Tokio. Da de Olympische uitdagingen aan en daag zoveel mogelijk
							mensen uit. En toon zo dat we achter Team Belgium staan!
						</p>
						<div className={stylesHome.headerBtn}>
							<div onClick={this.scrollToLatest}>
								<Button
									keyValue={uuid()}
									label={'ga naar nieuwste opdracht'}
									color={'secondary'}
									link={''}
								/>
							</div>
						</div>
					</div>
					<img
						className={stylesHome.headerImg}
						src='../assets/img/header_image@2x.png'
						alt='sporza_atleten_home'
					/>
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
							transitionLeave={true}
						>
							<HomeChallenge
								challenge={'belofte'}
								direction={'links'}
								unlockDate={'23 juli'}
							/>
						</CSSTransitionGroup>
						<CSSTransitionGroup
							transitionName='example'
							transitionAppear={true}
							transitionAppearTimeout={500}
							transitionEnter={false}
							transitionLeave={true}
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
							transitionLeave={true}
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
							transitionLeave={true}
						>
							<div ref={this.latest}>
								<HomeChallenge
									challenge={'tapwedstrijd'}
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
							transitionLeave={true}
						>
							<HomeChallenge
								challenge={'quiz'}
								direction={'links'}
								unlockDate={'4 augustus'}
							/>
						</CSSTransitionGroup>
						<CSSTransitionGroup
							transitionName='example'
							transitionAppear={true}
							transitionAppearTimeout={500}
							transitionEnter={false}
							transitionLeave={true}
						>
							<HomeChallenge
								challenge={'smoothie'}
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
