import React from 'react';
import { Navtext } from './Typography';
import styles from '../styles/DestinationList.module.scss';
function DestinationList({ clickHandler }) {
	return (
		<ul className={styles.DestinationList}>
			<li>
				<button
					onClick={() => {
						clickHandler(0);
					}}
					className={styles.Destination}>
					<Navtext text='Moon' />
				</button>
			</li>
			<li>
				<button
					onClick={() => {
						clickHandler(1);
					}}
					className={styles.Destination}>
					<Navtext text='Mars' />
				</button>
			</li>
			<li>
				<button
					onClick={() => {
						clickHandler(2);
					}}
					className={styles.Destination}>
					<Navtext text='Europa' />
				</button>
			</li>
			<li>
				<button
					onClick={() => {
						clickHandler(3);
					}}
					className={styles.Destination}>
					<Navtext text='Titan' />
				</button>
			</li>
		</ul>
	);
}

export default DestinationList;
