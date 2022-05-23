import Link from 'next/link';

const CheckOutBtn = () => {
	return (
		<Link href='/cart/checkout'>
			<button className='btn-checkout'>CheckOut</button>
		</Link>
	);
};

export default CheckOutBtn;
