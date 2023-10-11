import Main from '../components/Main.tsx';
import ErrorPageMessage from '../components/ErrorPageMessage.tsx';

const ErrorPage = (): JSX.Element => {
	return (
		<Main>
			<ErrorPageMessage />
		</Main>
	);
};

export default ErrorPage;
