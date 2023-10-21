// Router
import { Link } from 'react-router-dom';

// Styles
import styles from './Header.module.css';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

const Header = (): JSX.Element => {
	return (
		<header className={styles.header}>
			<Link to="/" className={styles.link}>
				<FontAwesomeIcon icon={faNewspaper} />
				<h1>NewsHook</h1>
			</Link>
		</header>
	);
};

export default Header;
