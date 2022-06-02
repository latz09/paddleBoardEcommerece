import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import { CartProvider } from '../contexts/cartContext';

function MyApp({ Component, pageProps }) {
	return (
		<CartProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</CartProvider>
	);
}

export default MyApp;
