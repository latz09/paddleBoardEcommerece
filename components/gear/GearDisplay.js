import Image from 'next/image';
import { useState } from 'react';
import AddToCartBtn from '../boards/details/AddToCartBtn'; 

import { useRouter } from 'next/router';
const GearDisplay = ({ item }) => {
	const router = useRouter();
	const [addToCart, setAddToCart] = useState(false);

	const sendDataToCart = () => {
		fetch('/api/cart', {
			method: 'POST',
			body: JSON.stringify({ item: item }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data));

		setAddToCart(true);
		setTimeout(() => {
			setAddToCart(false);
		}, 2000);
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
					width={200}
					height={300}
				/>
			</div>

			<div>
				<h1 className='text-4xl sm:text-5xl font-semibold'>${item.price}</h1>
			</div>
			<button onClick={sendDataToCart}>
				<AddToCartBtn />
			</button>
            <h1
					className={`${
						!addToCart
							? 'hidden'
							: 'text-orange-500 tracking-wide text-center text-2xl p-3 '
					}`}
				>
					added to cart!
				</h1>
			<div>
				<p className='text-md  text-gray-700 text-center'>
					{item.description_long}
				</p>
			</div>
		</div>
	);
};

export default GearDisplay;
