import AppContext from './contexts/AppContext.ts';
import type { ArticleType } from './types/types.ts';

// Custom Hook
import useLocalStorage from './hooks/useLocalStorage.ts';

// Import from React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import AppSharedLayout from './pages/AppSharedLayout.tsx';
import HomePage from './pages/HomePage.tsx';
import NewsWorld from './pages/NewsWorld.tsx';
import NewsUnitedStates from './pages/NewsUnitedStates.tsx';
import NewsUnitedKingdom from './pages/NewsUnitedKingdom.tsx';
import NewsAustralia from './pages/NewsAustralia.tsx';
import FullArticle from './pages/FullArticle.tsx';
import ErrorPage from './pages/ErrorPage.tsx';

const App = () => {
	const [fullArticle, setFullArticle] = useLocalStorage<ArticleType>(
		'react-news.article',
		{} as ArticleType
	);

	return (
		<AppContext.Provider
			value={{
				fullArticle: fullArticle,
				setFullArticle: setFullArticle,
			}}
		>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<AppSharedLayout />}>
						<Route index element={<HomePage />} />
						<Route path="world/:id" element={<FullArticle />} />
						<Route path="united-states/:id" element={<FullArticle />} />
						<Route path="united-kingdom/:id" element={<FullArticle />} />
						<Route path="australia/:id" element={<FullArticle />} />
						<Route path="world" element={<NewsWorld />} />
						<Route path="united-states" element={<NewsUnitedStates />} />
						<Route path="united-kingdom" element={<NewsUnitedKingdom />} />
						<Route path="australia" element={<NewsAustralia />} />
						<Route path="*" element={<ErrorPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</AppContext.Provider>
	);
};

export default App;
