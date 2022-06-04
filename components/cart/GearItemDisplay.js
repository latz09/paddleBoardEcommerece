import Image from 'next/image';
import {useRouter} from 'next/router'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';

const GearItemDisplay = ({ image, name, category, price, id }) => {
	const { removeItemFromCart } = useContext(CartContext);
	const router = useRouter()

	const removeCartItem = () => {
		removeItemFromCart(id);
		setTimeout(() => {
			router.push('/cart')
		}, 1000);
	};

	return (
		<div className='cart-card'>
			<div className='border-r mt-3 px-4 py-2 text-center'>
				<Image
					src={image}
					width={100}
					height={125}
					alt={`Picture of ${name}`}
				/>
			</div>
			<div className='grid content-around'>
				<h1 className='font-semibold text-xl text-gray-800'>{name}</h1>
				<p>Qty: 1</p>
				<p>{category}</p>
			</div>
			<div className='grid content-evenly justify-items-end mr-4'>
				<div className='self-start tracking-wide text-gray-800'>$ {price}</div>
				<button
					onClick={removeCartItem}
					className='tracking-wider text-board-blue font-semibold'
				>
					Remove
				</button>
			</div>
		</div>
	);
};

export default GearItemDisplay;
