import Link from 'next/link';
import { shoppingCart } from './icons';
import Logo from './Logo';

const Header = () => {
	return (
		<div className="flex justify-between border-b-2 items-center font-semibold p-4 uppercase">
			<Logo />
			<div className="grid grid-cols-3 space-x-4 text-base">
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
			<div>
				<Link href='/'>
					<div className="flex space-x-2">
						<span>{shoppingCart}</span>
						<p>CART</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
