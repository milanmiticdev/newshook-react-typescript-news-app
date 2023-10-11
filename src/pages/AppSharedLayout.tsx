import { Outlet } from 'react-router-dom';
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
