import CartDisplay from '../../components/cart/CartDisplay';
import { connectToDatabase } from '../../lib/mongodb';
import { CartContext } from '../../contexts/cartContext';
import { useEffect, useContext } from 'react';

const Cart = ({ initialCartItems }) => {
	//bring in context	
	//setCartItems as the intial cart items from server side props	
	const cartCtx = useContext(CartContext);

	useEffect(() => {
		cartCtx.setCartItems(initialCartItems)
	},[cartCtx, initialCartItems])

	

	return (
		<div>
			<CartDisplay items={cartCtx.cartItems} />
		</div>
	);
};

export default Cart;

export async function getServerSideProps() {
	const db = await connectToDatabase();
	const cartCollection = db.collection('myCart');
	const data = await cartCollection.find().toArray();

	return {
		props: { initialCartItems: JSON.parse(JSON.stringify(data)) },
	};
}
