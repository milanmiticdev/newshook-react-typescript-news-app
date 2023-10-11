import { useEffect } from 'react';
import Main from '../components/Main.tsx';
import Display from '../components/Display.tsx';

const NewsAustralia = (): JSX.Element => {
	useEffect((): void => {
		document.title = 'Australia News | NewsHook';
	}, []);

	return (
		<Main>
			<Display section={'australia-news'} />
		</Main>
	);
};

export default NewsAustralia;
