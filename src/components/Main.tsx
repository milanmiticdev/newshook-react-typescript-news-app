import styles from './Main.module.css';
import type { MainProps } from '../types/props.ts';

const Main = ({ children }: MainProps): JSX.Element => {
	return <main className={styles.main}>{children}</main>;
};

export default Main;
