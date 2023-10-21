// Types
import type { MessageProps } from '../types/props.ts';

// Styles
import styles from './Message.module.css';

const Message = ({ message }: MessageProps): JSX.Element => {
	return (
		<div className={styles.message}>
			<p>{message}</p>
		</div>
	);
};

export default Message;
