import Link from 'next/link';
import { shoppingCart } from './icons';
import { useContext } from 'react';
import { CartContext } from '../../../contexts/cartContext';

const Header = () => {
	const { totalItems } = useContext(CartContext);

	return (
		<div className='bg-blue-900 text-white text-sm p-2'>
			<Link href='/cart'>
				<div className='flex justify-end items-center space-x-2 cursor-pointer sm:mr-5'>
					<span>{shoppingCart}</span>
					<p>CART</p>
					<span className='bg-orange-500 rounded-full py-2 px-4 border-2 border-white font-bold'>
						{totalItems}
					</span>
					<span className='text-md font-semibold'></span>
				</div>
			</Link>
		</div>
	);
};

export default Header;
