import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import AdventureStage from '../components/AdventureStage';
import { Heading3, Heading4, Paragraph } from '../components/Typography';
import styles from '../styles/Crew.module.scss';

import crewData from '../data/data.json';

export const getStaticProps = () => {
	const data = crewData;
	return { props: { crew: data.crew } };
};

function Crew({ crew }) {
	const [active, setActive] = useState(0);

	return (
		<div className={styles.CrewWrapper}>
			<Navbar current='crew' />
			<AdventureStage number='02' text='meet your crew' />
			<div className={styles.ContentWrapper}>
				<div className={styles.CrewTextWrapper}>
					<div className={styles.selectionWrapper}>
						<ul className={styles.selectionList}>
							{crew.map((item, index) => {
								if (index == active) {
									return (
										<li>
											<button
												onClick={() => {
													setActive(index);
												}}
												className={`${styles.selection} ${styles.active}`}></button>
										</li>
									);
								} else {
									return (
										<li>
											<button
												onClick={() => {
													setActive(index);
												}}
												className={
													styles.selection
												}></button>
										</li>
									);
								}
							})}
						</ul>
					</div>
					<div className={styles.CrewText}>
						<Heading4 text={crew[active].role} />
						<Heading3 text={crew[active].name} />
						<Paragraph text={crew[active].bio} />
					</div>
				</div>
				<div className={styles.CrewPortrait}>
					<img src={crew[active].images.webp} alt='' />
				</div>
			</div>
		</div>
	);
}

export default Crew;
