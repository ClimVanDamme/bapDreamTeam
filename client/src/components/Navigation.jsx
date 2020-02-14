import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = ({ href }) => {
	return (
		<>
			<div className={styles.navCont}>
				<div className={styles.backBtn}>
					<Link to={href}>
						<img
							className={styles.arrowImg}
							src='../assets/img/back_arrow.svg'
							alt=''
						/>
					</Link>
				</div>
				<div>
					<Link to={'/'}>
						<img
							className={styles.logoSporza}
							src='../assets/img/logo.png'
							alt=''
						/>
					</Link>
				</div>
				<div className={styles.homeBtn}>
					<Link to={'/'}>
						<span className={styles.text}>Terug naar home</span>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navigation;
