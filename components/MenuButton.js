import React from 'react';
import Image from 'next/image';

import styles from '../styles/MenuButton.module.scss';

function MenuButton() {
	return (
		<button className={styles.MenuButton}>
			<Image
				src='/assets/shared/icon-hamburger.svg'
				height='21'
				width='24'
			/>
		</button>
	);
}

export default MenuButton;
