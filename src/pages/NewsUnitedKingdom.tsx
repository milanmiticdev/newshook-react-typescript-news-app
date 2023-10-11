import { useEffect } from 'react';
import Main from '../components/Main.tsx';
import Display from '../components/Display.tsx';

const NewsUnitedKingdom = (): JSX.Element => {
	useEffect((): void => {
		document.title = 'United Kingdom News | NewsHook';
	}, []);

	return (
		<Main>
			<Display section={'uk-news'} />
		</Main>
	);
};

export default NewsUnitedKingdom;
