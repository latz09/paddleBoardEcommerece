import Link from 'next/link';
import Logo from './Logo';

const NavBar = () => {
	return (
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
	);
};

export default NavBar;
