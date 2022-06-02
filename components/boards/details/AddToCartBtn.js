import { useState, useRef } from 'react';

const AddToCartBtn = ({data}) => {
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


	return (
		<div className='flex items-center space-x-4 font-semibold'>
			<div className='flex sm:text-2xl items-center'>
				<div onClick={decrement} className='bg-gray-300 py-2 px-5 order-1 cursor-pointer'>
					-
				</div>
				<div onClick={increment} className='bg-gray-300 py-2 px-4 cursor-pointer'>
					+
				</div>
				<div className='m-4'>{count}</div>
			</div>

			<button onClick={data} className='bg-orange-400 p-3 text-xs sm:text-base sm:px-6 sm:py-3 hover:bg-orange-200 cursor-pointer'>
				ADD TO CART
			</button>
		</div>
	);
};

export default AddToCartBtn;
