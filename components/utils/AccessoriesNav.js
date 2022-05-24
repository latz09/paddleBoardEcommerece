import Link from 'next/link';

const AccessoriesNavBar = () => {
	return (
		<div className='mt-4'>
			<div className='flex justify-evenly text-gray-400 text-lg tracking-widest'>
				<div className='category-nav'>
					<Link href='/'>
						<a>Bags</a>
					</Link>
				</div>
				<div className='category-nav'>
					<Link href='/'>
						<a>Paddles</a>
					</Link>
				</div>
				<div className='category-nav'>
					<Link href='/'>
						<a>Pumps</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AccessoriesNavBar;
