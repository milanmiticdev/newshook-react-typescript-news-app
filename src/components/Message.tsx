import styles from './Message.module.css';
import type { MessageProps } from '../types/props.ts';

const Message = ({ message }: MessageProps): JSX.Element => {
	return (
		<div className={styles.message}>
			<p>{message}</p>
		</div>
	);
};

export default Message;
