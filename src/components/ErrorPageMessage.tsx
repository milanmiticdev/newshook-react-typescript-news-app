// Styles
import styles from './ErrorPageMessage.module.css';

const ErrorPageMessage = (): JSX.Element => {
	return (
		<div className={styles.errorPageMessage}>
			<p>404</p>
			<p>Page not found</p>
		</div>
	);
};

export default ErrorPageMessage;
