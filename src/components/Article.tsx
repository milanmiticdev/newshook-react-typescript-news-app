// Hooks
import { useState, useEffect, useContext } from 'react';

// Context
import AppContext from '../contexts/AppContext.ts';

// HTML Parser
import parse from 'html-react-parser';

// Styles
import styles from './Article.module.css';

const Article = (): JSX.Element => {
	const [body, setBody] = useState<string>('');
	const { fullArticle } = useContext(AppContext);

	useEffect((): void => {
		setBody(fullArticle.fields.body);
	}, [fullArticle]);

	return (
		<article className={styles.article}>
			<h1>{fullArticle.webTitle.toUpperCase()}</h1>
			<img src={fullArticle.fields.thumbnail} alt={fullArticle.webTitle} />
			<div className={styles.body}>{/* Converting string to html */ parse(body)}</div>
		</article>
	);
};

export default Article;
