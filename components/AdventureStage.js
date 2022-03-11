import React from 'react';
import styles from '../styles/StageNumber.module.scss';

const StageNumber = ({ number }) => {
	return <p className={styles.StageNumber}>{number}</p>;
};
const StageText = ({ text }) => {
	return <sub className={styles.StageText}>{text}</sub>;
};

function AdventureStage({ number, text }) {
	return (
		<div className={styles.StageWrapper}>
			<StageNumber number={number} />
			<StageText text={text} />
		</div>
	);
}

export default AdventureStage;
