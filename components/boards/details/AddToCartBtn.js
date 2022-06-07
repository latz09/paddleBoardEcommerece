// import { useState } from 'react';

const AddToCartBtn = ({ data, title, decrement, increment, count }) => {
	return (
		<div className='flex items-center space-x-4 font-semibold'>
			<div className='flex sm:text-2xl items-center'>
				<div
					onClick={decrement}
					className='bg-gray-300 py-2 px-5 order-1 cursor-pointer'
				>
					-
				</div>
				<div
					onClick={increment}
					className='bg-gray-300 py-2 px-4 cursor-pointer'
				>
					+
				</div>
				<div className='m-4'>{count}</div>
			</div>

			<button
				onClick={data}
				count={count}
				className='bg-orange-400 p-3 text-xs sm:text-base sm:px-6 sm:py-3 hover:bg-orange-200 cursor-pointer'
			>
				{title}
			</button>
		</div>
	);
};

export default AddToCartBtn;

//if count > 1 

// when it is sent to cart add an additional property of qty = count

// also multiply the saleprice by count

//shopping cart total should update??