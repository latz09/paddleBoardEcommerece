import Header from '../header/Header';

const Layout = ({ children }) => {
	return (
		<div className="p-1 h-screen mx-auto text-blue-800 bg-gray-100">
			<Header />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
