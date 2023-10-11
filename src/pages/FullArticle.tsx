import { useEffect, useContext } from 'react';
import AppContext from '../contexts/AppContext.ts';
import Article from '../components/Article.tsx';

const FullArticle = (): JSX.Element => {
	const { fullArticle } = useContext(AppContext);

	useEffect((): void => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (Object.keys(fullArticle).length > 0) {
			document.title = `${fullArticle.webTitle} | NewsHook`;
		} else {
			document.title = 'NewsHook';
		}
	}, [fullArticle]);

	return <Article />;
};

export default FullArticle;
