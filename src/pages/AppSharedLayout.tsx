// Router
import { Outlet } from 'react-router-dom';

// Components
import Header from '../components/Header.tsx';
import Navbar from '../components/Navbar.tsx';

const AppSharedLayout = (): JSX.Element => {
	return (
		<>
			<Header />
			<Navbar />
			<Outlet />
		</>
	);
};

export default AppSharedLayout;
