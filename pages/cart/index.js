import CartDisplay from '../../components/cart/CartDisplay';
import { connectToDatabase } from '../../lib/mongodb';

const Cart = ({ cartItems }) => {
	return (
		<div>
			<CartDisplay items={cartItems} />
		</div>
	);
};

export default Cart;

export async function getServerSideProps() {
	const db = await connectToDatabase();
	const cartCollection = db.collection('myCart');
	const data = await cartCollection.find().toArray();

	return {
		props: { cartItems: JSON.parse(JSON.stringify(data)) },
	};
}
