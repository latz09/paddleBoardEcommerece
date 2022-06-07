import CartDisplay from '../../components/cart/CartDisplay';
import connectToDatabase from '../../lib/mongodb';
import { CartContext } from '../../contexts/cartContext';
import { useEffect, useContext } from 'react';

const Cart = ({ initialCartItems }) => {
	const { setCartItems, cartItems } = useContext(CartContext);

	useEffect(() => {
		setCartItems(initialCartItems);
	}, [initialCartItems, setCartItems, cartItems]);

	return (
		<div className='my-12'> 
			<CartDisplay />
		</div>
	);
};

export default Cart;

export async function getServerSideProps() {
	const client = await connectToDatabase;
	const db = await client.db();
	const cartItems = await db.collection('myCart').find().toArray();
	const mappedData = cartItems.map((x) => x.item);

	return {
		props: { initialCartItems: JSON.parse(JSON.stringify(mappedData)) },
	};
}
