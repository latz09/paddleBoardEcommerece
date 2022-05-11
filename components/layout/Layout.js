import Footer from './footer/Footer';
import Header from './header/Header';

const Layout = ({ children }) => {
	return (
		<div className="text-blue-900">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
