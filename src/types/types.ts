export interface ArticleType {
	apiUrl: string;
	fields: {
		body: string;
		thumbnail: string;
	};
	id: string;
	isHosted: boolean;
	pillarId: string;
	pillarName: string;
	sectionId: string;
	sectionName: string;
	type: string;
	webPublicationDate: string;
	webTitle: string;
	webUrl: string;
}

export interface ContextProviderValueType {
	fullArticle: ArticleType;
	setFullArticle: React.Dispatch<React.SetStateAction<ArticleType>>;
}

export interface DataType {
	response: {
		currentPage: number;
		orderBy: string;
		pageSize: number;
		pages: number;
		results: ArticleType[];
		startIndex: number;
		status: string;
		total: number;
		userTier: string;
	};
}

export interface DateType {
	day: number;
	month: number;
	year: number;
}

export interface QueryType {
	apiKey: string;
	baseUrl: string;
	fields: string;
	pageSize: number;
	type: string;
}

export type ReducerActionType =
	| { type: 'articles_fetched'; payload: ArticleType[] }
	| { type: 'loading_check'; payload: boolean }
	| { type: 'error_check'; payload: boolean }
	| { type: 'message'; payload: string };

export interface ReducerStateType {
	articles: ArticleType[];
	loading: boolean;
	error: boolean;
	message: string;
}

export type UseEffectCleanupType = () => void;

export type UseLocalStorageType<T> = [T, React.Dispatch<React.SetStateAction<T>>];
