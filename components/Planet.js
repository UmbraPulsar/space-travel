import React from 'react';
import Image from 'next/image';

import styles from '../styles/Planet.module.scss';

function Planet({ image }) {
	return (
		<div className={styles.PlanetContainer}>
			<img className={styles.Planet} src={image} alt=''></img>
		</div>
	);
}

export default Planet;
