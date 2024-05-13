import styles from "./CustomButton.module.css"; // Import CSS file for button styles

const CustomButton = ({ onClick, children }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{children}
		</button>
	);
};

export default CustomButton;
