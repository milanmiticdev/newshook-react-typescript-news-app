// Hooks
import { useEffect } from 'react';

// Components
import Home from '../components/Home.tsx';

const HomePage = (): JSX.Element => {
	useEffect((): void => {
		document.title = 'NewsHook - React TypeScript News App';
	}, []);

	return <Home />;
};

export default HomePage;
