import { useEffect } from 'react';
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
