import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Heading3, Heading42, Paragraph } from '../components/Typography';
import AdventureStage from '../components/AdventureStage';

import styles from '../styles/Tech.module.scss';

const TechImage = ({ images }) => {
	return (
		<div className={styles.TechImageContainer}>
			<img
				className={styles.TechImage}
				srcSet={`${images.portrait} 1400w, ${images.landscape} 1000w`}
				sizes='(min-width:1000px)'
				src={images.landscape}
				alt=''
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
			<div className={styles.FlexWrapper}>
				<TechImage images={techs[active].images} />
				<div className={styles.TechTextContentContainer}>
					<div className={styles.TechSelectionListContainer}>
						<ul className={styles.TechSelectionList}>
							{techs.map((item, index) => {
								if (index == active) {
									return (
										<li key={index}>
											<button
												onClick={() => {
													setActive(index);
												}}
												className={`${styles.SelectionButton} ${styles.active}`}>
												{index + 1}
											</button>
										</li>
									);
								} else {
									return (
										<li key={index}>
											<button
												onClick={() => {
													setActive(index);
												}}
												className={`${styles.SelectionButton}`}>
												{index + 1}
											</button>
										</li>
									);
								}
							})}
						</ul>
					</div>
					<div className={styles.TechTextWrapper}>
						<Heading42 text='The Terminology...' />
						<Heading3 text={techs[active].name} />
						<Paragraph text={techs[active].description} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default technology;
