// Router
import { NavLink } from 'react-router-dom';

// Styles
import styles from './Navbar.module.css';

const Navbar = (): JSX.Element => {
	return (
		<nav>
			<ul className={styles.nav}>
				<NavLink
					to="/world"
					className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : `${styles.link}`)}
				>
					World
				</NavLink>
				<NavLink
					to="/united-states"
					className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : `${styles.link}`)}
				>
					US
				</NavLink>
				<NavLink
					to="/united-kingdom"
					className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : `${styles.link}`)}
				>
					UK
				</NavLink>
				<NavLink
					to="/australia"
					className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : `${styles.link}`)}
				>
					Australia
				</NavLink>
			</ul>
		</nav>
	);
};

export default Navbar;
