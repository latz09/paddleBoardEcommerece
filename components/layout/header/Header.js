import Link from 'next/link';
import { shoppingCart } from './icons';
import Logo from './Logo';

const Header = () => {
	return (
		<div>
			<div className="bg-blue-900 text-white text-sm">
				<Link href='/'>
					<div className='flex justify-end px-4 py-1 mr-4'>
						<span>{shoppingCart}</span>
						<p>CART</p>
					</div>
				</Link>
			</div>
			<div className='flex justify-between  border-b-2 items-center font-semibold py-2 px-4 uppercase md:justify-evenly'>
				<Logo />
				<div className='grid grid-cols-3 gap-2 space-x-2 text-sm md:text-xl'>
					<Link href='/paddleboards/all-boards'>
						<a className="hover:animate-pulse">boards</a>
					</Link>
					<Link href='/gear'>
						<a className="hover:animate-pulse">gear</a>
					</Link>
					<Link href='/'>
						<a className="hover:animate-pulse">explore</a>
					</Link>
				</div>
			
			</div>
		</div>
	);
};

export default Header;
