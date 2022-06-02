import Link from 'next/link';
import { shoppingCart } from './icons';
import Logo from './Logo';
import { useState, useEffect } from 'react';

const Header = () => {

	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('/api/cart')
			.then((res) => res.json())
			.then((data) => {
				setData(data.items.length);
			});
	}, []);

	return (
		<div>
			<div className='bg-blue-900 text-white text-sm p-2'>
				<Link href='/cart'>
					<div className='flex justify-end items-center space-x-2 cursor-pointer mr-5'>
						<span>{shoppingCart}</span>
						<p>CART</p>
						<span>{}</span>
						<span className='text-md font-semibold'></span>
					</div>
				</Link>
			</div>
			<div className='flex justify-between  border-b-2 items-center font-semibold py-2 px-4 uppercase md:justify-evenly'>
				<Logo />
				<div className='flex gap-2 space-x-3 sm:space-x-8 text-sm md:text-xl'>
					<Link href='/paddleboards/all-boards'>
						<a className='hover:animate-pulse'>boards</a>
					</Link>
					<Link href='/gear'>
						<a className='hover:animate-pulse'>gear</a>
					</Link>
					<Link href='/'>
						<a className='hover:animate-pulse'>explore</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
