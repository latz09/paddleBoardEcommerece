import CartDisplay from '../../components/cart/CartDisplay';
const Cart = ({ data }) => {
	const items = data.items;

	const neededItems = items.map((item) => {
		return item.cartItem;
	});

	return (
		<div>
			<CartDisplay items={neededItems} />
		</div>
	);
};

export default Cart;

export async function getServerSideProps() {
	const res = await fetch('http://localhost:3000/api/cart');
	const data = await res.json();

	return {
		props: {
			data,
		},
	};
} 