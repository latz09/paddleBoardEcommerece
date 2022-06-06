import Footer from './footer/Footer';
import Header from './header/Header';
import NavBar from './header/NavBar';

const Layout = ({ children }) => {
	return (
		<div className='text-blue-900 mx-auto scroll-smooth '>
			<div className='sticky top-0 z-50'>
				<Header />
			</div>
			<div>
				<NavBar />
			</div>
			<main className='relative'>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
