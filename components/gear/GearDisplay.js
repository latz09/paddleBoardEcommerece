import Image from 'next/image';
import AddToCartBtn from '../boards/details/AddToCartBtn';
import { useState, useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import { v4 as uuid } from 'uuid';

const GearDisplay = ({ item }) => {
	const { addItemToCart, cartItems } = useContext(CartContext);
	const [addToCart, setAddToCart] = useState(false);
	const [count, setCount] = useState(1);

	function increment() {
		setCount(count + 1);
	}

	function decrement() {
		if (count === 1) {
			return;
		}
		setCount(count - 1);
	}

	const sendDataToCart = () => {
		if (count > 1) {
			item = { ...item, qty: count, totalPrice: item.price * count };
		}

		if (cartItems.map((item) => item._id === item._id)) {
			item._id = uuid();
		}
		addItemToCart(item);

		setAddToCart(true);
		setTimeout(() => {
			setAddToCart(false);
		}, 4000);
	};

	return (
		<div className='flex flex-col items-center justify-items-center space-y-4 space-x-2 '>
			<div className='grid gap-3'>
				<h1 className='text-4xl font-bold text-center'>{item.name}</h1>
				<p className='text-md tracking-wider text-gray-700 text-center'>
					{item.description_short}
				</p>
			</div>
			<div>
				<Image
					src={item.image}
					alt={`Picture of ${item.image}`}
					width={340}
					height={300}
				/>
			</div>

			<div>
				<h1 className='text-4xl sm:text-5xl font-semibold'>${item.price}</h1>
			</div>
			<div className='pt-4'>
				<AddToCartBtn
					data={sendDataToCart}
					increment={increment}
					decrement={decrement}
					count={count}
					title={`${!addToCart ? 'Add To Cart' : 'Added!'}`}
				/>
			</div>
			<div>
				<p className='text-md  text-gray-700 text-center'>
					{item.description_long}
				</p>
			</div>
		</div>
	);
};

export default GearDisplay;
