// Types
import type { MainProps } from '../types/props.ts';

// Styles
import styles from './Main.module.css';

const Main = ({ children }: MainProps): JSX.Element => {
	return <main className={styles.main}>{children}</main>;
};

export default Main;
