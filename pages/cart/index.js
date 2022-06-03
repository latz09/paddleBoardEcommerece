import CartDisplay from '../../components/cart/CartDisplay';
import { connectToDatabase } from '../../lib/mongodb';
import { CartContext } from '../../contexts/cartContext';
import { useEffect, useContext } from 'react';

const Cart = ({ initialCartItems }) => {
	const { setCartItems, cartItems } = useContext(CartContext);

	useEffect(() => {
		setCartItems(initialCartItems);
	}, [initialCartItems, setCartItems, cartItems]);

	return (
		<div>
			<CartDisplay />
		</div>
	);
};

export default Cart;

export async function getServerSideProps() {
	const db = await connectToDatabase();
	const cartCollection = db.collection('myCart');
	const data = await cartCollection.find().toArray();
	const mappedData = data.map((x) => x.item);

	return {
		props: { initialCartItems: JSON.parse(JSON.stringify(mappedData)) },
	};
}
