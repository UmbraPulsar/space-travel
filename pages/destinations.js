import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import AdventureStage from '../components/AdventureStage';
import Planet from '../components/Planet';
import styles from '../styles/Destination.module.scss';
import {
	Heading2,
	Paragraph,
	SubHeading2,
	SubHeading1,
} from '../components/Typography';

import DestinationList from '../components/DestinationList';

import destinationData from '../data/data.json';

export const getStaticProps = async () => {
	const data = destinationData;
	return { props: { destinations: data.destinations } };
};

const Divider = () => {
	return <div className={styles.Divider}></div>;
};

function Destinations({ destinations }) {
	const [active, setActive] = useState(0);

	return (
		<div className={styles.DestinationsWrapper}>
			<Navbar current='destinations' />
			<AdventureStage number='01' text='Pick your Destination' />
			<div className={styles.ContentWrapper}>
				<div className={styles.PlanetWrapper}>
					<Planet image={destinations[active].images.webp} />
				</div>
				<div className={styles.DestinationTextWrapper}>
					<DestinationList
						clickHandler={setActive}
						destinations={destinations}
					/>
					<Heading2 text={destinations[active].name} />
					<Paragraph text={destinations[active].description} />
					<Divider />
					<div className={styles.DataContainer}>
						<div className={styles.DataSet}>
							<SubHeading1 text='Avg Distance' />
							<SubHeading2 text={destinations[active].distance} />
						</div>
						<div className={styles.DataSet}>
							<SubHeading1 text='EST. TRAVEL TIME' />
							<SubHeading2 text={destinations[active].travel} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Destinations;
