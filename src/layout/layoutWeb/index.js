import Footer from '../../components/footer';
import Header from '../../components/header';
import ToastMessage from '../../components/toastMessage';

function DefaultLayout({ children }) {
	return (
		<div className="relative">
			<Header />
			<div className="min-h-screen">{children}</div>
			<Footer />
			{/* <ToastMessage /> */}
		</div>
	);
}

export default DefaultLayout;
