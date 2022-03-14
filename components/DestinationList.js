import React, { useState } from 'react';
import { Navtext } from './Typography';
import styles from '../styles/DestinationList.module.scss';

function DestinationList({ clickHandler, destinations }) {
	const [active, setActive] = useState(0);
	return (
		<ul className={styles.DestinationList}>
			{destinations.map((item, index) => {
				return (
					<li>
						<button
							onClick={() => {
								setActive(index);
								clickHandler(index);
							}}
							className={`${styles.Destination} ${
								index == active ? styles.active : false
							}`}>
							<Navtext text={item.name} />
						</button>
					</li>
				);
			})}
		</ul>
	);
}

export default DestinationList;
