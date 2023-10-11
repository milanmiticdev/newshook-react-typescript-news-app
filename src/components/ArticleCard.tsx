import { useContext } from 'react';
import AppContext from '../contexts/AppContext.ts';
import { Link } from 'react-router-dom';
import styles from './ArticleCard.module.css';
import type { ArticleCardProps } from '../types/props.ts';

const ArticleCard = ({ article }: ArticleCardProps): JSX.Element => {
	const { setFullArticle } = useContext(AppContext);

	const handleMouseDown = (e: React.MouseEvent): void => {
		// 0 is for the left click and 1 is for the middle click
		if (e.button === 0 || e.button === 1) {
			setFullArticle(article);
		}
	};

	return (
		/*  
            For [id] select only part with the article title in the id using (lastIndexOf) and (slice)
            From: us-news/2023/aug/01/some-news-title will include only [some-news-title]
        */
		<Link
			onMouseDown={handleMouseDown}
			to={`${article.id.slice(article.id.lastIndexOf('/') + 1)}`}
			className={styles.link}
		>
			<article className={styles.articleCard}>
				<div className={styles.image}>
					<img src={article.fields.thumbnail} alt={article.webTitle} />
				</div>
				<div className={styles.heading}>
					<h2>{article.webTitle}</h2>
				</div>
			</article>
		</Link>
	);
};

export default ArticleCard;
