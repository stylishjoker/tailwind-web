import Footer from '../../components/footer';
import Header from '../../components/header';

function DefaultLayout({ children }) {
	return (
		<div>
			<Header />
			<div>{children}</div>
			<Footer />
		</div>
	);
}

export default DefaultLayout;
