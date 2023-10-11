import { useEffect } from 'react';
import Home from '../components/Home.tsx';

const HomePage = (): JSX.Element => {
	useEffect((): void => {
		document.title = 'NewsHook - React TypeScript News App';
	}, []);

	return <Home />;
};

export default HomePage;
