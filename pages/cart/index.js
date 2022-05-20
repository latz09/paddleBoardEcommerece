import CartDisplay from '../../components/cart/CartDisplay';
const Cart = ({ data }) => {
	const items = data.items;
	return (
		<div>
			<CartDisplay items={items} />
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
