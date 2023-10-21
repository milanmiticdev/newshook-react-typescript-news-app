// Hooks
import { useEffect } from 'react';

// Components
import Main from '../components/Main.tsx';
import Display from '../components/Display.tsx';

const NewsUnitedStates = (): JSX.Element => {
	useEffect((): void => {
		document.title = 'United States News | NewsHook';
	}, []);

	return (
		<Main>
			<Display section={'us-news'} />
		</Main>
	);
};

export default NewsUnitedStates;
