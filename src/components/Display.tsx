// Hooks
import { useEffect, useReducer } from 'react';

// Components
import Message from './Message.tsx';
import SectionDay from './SectionDay.tsx';
import ArticleCard from './ArticleCard.tsx';

// Types
import type { DisplayProps } from '../types/props.ts';
import type { ArticleType } from '../types/types.ts';
import type { DataType } from '../types/types.ts';
import type { QueryType } from '../types/types.ts';
import type { ReducerActionType } from '../types/types.ts';
import type { ReducerStateType } from '../types/types.ts';

const initialState: ReducerStateType = {
	articles: [] as ArticleType[],
	loading: false,
	error: false,
	message: '',
};

const reducer = (state: ReducerStateType, action: ReducerActionType): ReducerStateType => {
	switch (action.type) {
		case 'articles_fetched':
			return { ...state, articles: action.payload };
		case 'loading_check':
			return { ...state, loading: action.payload };
		case 'error_check':
			return { ...state, error: action.payload };
		case 'message':
			return { ...state, message: action.payload };
	}
};

const query: QueryType = {
	apiKey: import.meta.env.VITE_REACT_NEWS_API_KEY,
	baseUrl: 'https://content.guardianapis.com/',
	fields: 'body,thumbnail',
	pageSize: 30,
	type: 'article',
};

const Display = ({ section }: DisplayProps): JSX.Element => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect((): void => {
		const fetchNews = async (): Promise<void> => {
			try {
				dispatch({ type: 'loading_check', payload: true });
				dispatch({ type: 'message', payload: 'Loading...' });

				const response: Response = await fetch(
					`${query.baseUrl}search?section=${section}&type=${query.type}&page-size=${query.pageSize}&show-fields=${query.fields}&api-key=${query.apiKey}`
				);
				const data: DataType = await response.json();

				if (data.response.results.length === 0) {
					throw new Error('Failed to fetch');
				}

				dispatch({ type: 'articles_fetched', payload: data.response.results });
				dispatch({ type: 'error_check', payload: false });
			} catch (error) {
				if (error instanceof Error) {
					dispatch({ type: 'message', payload: 'Failed to fetch' });
					dispatch({ type: 'error_check', payload: true });
				} else {
					dispatch({ type: 'message', payload: 'Failed to fetch' });
					dispatch({ type: 'error_check', payload: true });
				}
			} finally {
				dispatch({ type: 'loading_check', payload: false });
			}
		};
		fetchNews();
	}, [dispatch, section]);

	/* 
        Function to format dates from fetched articles without the part after letter T 
        Example: 2023/08/01T12:00:01Z will be formated to 2023/08/01
    */
	const formatDate = (article: ArticleType): string => {
		const letterTIndex: number = article.webPublicationDate.indexOf('T');
		return article.webPublicationDate.substring(0, letterTIndex);
	};

	// Array of all dates from fetched articles with duplicate values
	const publicationDates: string[] = state.articles.map((article: ArticleType): string => formatDate(article));

	// Select only unique values of dates which will be used to display articles by date on the page
	const dates: string[] = Array.from(new Set(publicationDates));

	return (
		<>
			{/* Displaying loading message */}
			{state.loading && <Message message={state.message} />}

			{/* Displaying error message */}
			{!state.loading && state.error && <Message message={state.message} />}

			{/* Displaying news */}
			{!state.loading &&
				!state.error &&
				dates &&
				dates.map((date: string): JSX.Element => {
					return (
						<SectionDay key={date} date={date}>
							{state.articles
								.filter((article: ArticleType): boolean => formatDate(article) === date)
								.map(
									(article: ArticleType): JSX.Element => (
										<ArticleCard key={article.id} article={article} />
									)
								)}
						</SectionDay>
					);
				})}
		</>
	);
};

export default Display;
