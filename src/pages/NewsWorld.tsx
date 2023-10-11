import { useEffect } from 'react';
import Main from '../components/Main.tsx';
import Display from '../components/Display.tsx';

const NewsWorld = (): JSX.Element => {
	useEffect((): void => {
		document.title = 'World News | NewsHook';
	}, []);

	return (
		<Main>
			<Display section={'world'} />
		</Main>
	);
};

export default NewsWorld;
