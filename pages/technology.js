import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import AdventureStage from '../components/AdventureStage';

import styles from '../styles/Tech.module.scss';

const TechImage = () => {
	return (
		<div className={styles.TechImageContainer}>
			<img
				className={styles.TechImage}
				src='\assets\technology\image-launch-vehicle-landscape.jpg'
			/>
		</div>
	);
};

import data from '../data/data.json';
export const getStaticProps = () => {
	const technology = data.technology;
	return { props: { techs: technology } };
};

function technology({ techs }) {
	const [active, setActive] = useState(0);
	return (
		<div className={styles.TechWrapper}>
			<Navbar />
			<AdventureStage number='03' text='Space Launch 101' />
			<TechImage />
			<div className={styles.TechSelectionListContainer}>
				<ul className={styles.TechSelectionList}>
					{techs.map((item, index) => {
						if (index == active) {
							return (
								<li>
									<button
										className={`${styles.TechButton} ${styles.active}`}>
										{index + 1}
									</button>
								</li>
							);
						} else {
							return (
								<li>
									<button className={styles.TechButton}>
										{index + 1}
									</button>
								</li>
							);
						}
					})}
				</ul>
			</div>
		</div>
	);
}

export default technology;
