// Types
import type { SectionDayProps } from '../types/props.ts';
import type { DateType } from '../types/types.ts';

// Styles
import styles from './SectionDay.module.css';

const SectionDay = ({ children, date }: SectionDayProps): JSX.Element => {
	const formatedDate: DateType = {
		day: new Date(date).getDate(),
		month: new Date(date).getMonth() + 1,
		year: new Date(date).getFullYear(),
	};

	return (
		<>
			<p className={styles.date}>{`${formatedDate.day}.${formatedDate.month}.${formatedDate.year}`}</p>
			<section className={styles.sectionDay}>{children}</section>
		</>
	);
};

export default SectionDay;
