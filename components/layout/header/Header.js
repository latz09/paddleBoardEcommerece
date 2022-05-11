import Link from 'next/link';
import { shoppingCart } from './icons';
import Logo from './Logo';

const Header = () => {
	return (
		<>
			<div className="bg-blue-900 text-white text-sm">
				<Link href='/'>
					<div className='flex justify-end px-4 py-1 mr-4'>
						<span>{shoppingCart}</span>
						<p>CART</p>
					</div>
				</Link>
			</div>
			<div className='flex justify-between md:justify-evenly border-b-2 items-center font-semibold p-4 uppercase'>
				<Logo />
				<div className='grid grid-cols-3 gap-2 space-x-2 text-sm'>
					<Link href='/'>
						<a>boards</a>
					</Link>
					<Link href='/'>
						<a>gear</a>
					</Link>
					<Link href='/'>
						<a>explore</a>
					</Link>
				</div>
			
			</div>
		</>
	);
};

export default Header;
