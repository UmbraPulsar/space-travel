import styles from '../styles/Typo.module.scss';

export const Heading1 = ({ text }) => {
	return <h1 className={styles.Heading1}>{text}</h1>;
};

export const Heading2 = ({ text }) => {
	return <h2 className={styles.Heading2}>{text}</h2>;
};

export const Heading3 = ({ text }) => {
	return <h3 className={styles.Heading3}>{text}</h3>;
};
export const Heading4 = ({ text }) => {
	return <h4 className={styles.Heading4}>{text}</h4>;
};
export const Heading5 = ({ text }) => {
	return <h5 className={styles.Heading5}>{text}</h5>;
};
export const SubHeading1 = ({ text }) => {
	return <sub className={styles.Subheading1}>{text}</sub>;
};
export const SubHeading2 = ({ text }) => {
	return <sub className={styles.Subheading2}>{text}</sub>;
};

export const Navtext = ({ text }) => {
	return <p className={styles.Navtext}>{text}</p>;
};
export const Paragraph = ({ text }) => {
	return <p className={styles.Paragraph}>{text}</p>;
};
