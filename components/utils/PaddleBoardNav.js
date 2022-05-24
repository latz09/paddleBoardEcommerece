import Link from 'next/link';

const Navbar = () => {
	return (
		<div className="mt-4">
			<div className='flex justify-evenly text-gray-400 text-lg tracking-widest'>
				<div className='category-nav'>
					<Link href='/paddleboards/all-boards'>
						<a>All</a>
					</Link>
				</div>
				<div className='category-nav'>
					<Link href='/paddleboards/hard-top'>
						<a>Hard</a>
					</Link>
				</div>
				<div className='category-nav'>
					<Link href='/paddleboards/inflatable'>
						<a>Inflatable</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
