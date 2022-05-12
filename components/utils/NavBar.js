import Link from 'next/link';

const Navbar = ({active}) => {
	return (
		<div className="mt-4">
			<div className='flex justify-evenly text-gray-400 text-lg tracking-widest'>
				<div className='border hover:border-gray-700 hover:bg-gray-100 py-2 px-5 text-center w-32'>
					<Link href='/paddleboards/all-boards'>
						<a>All</a>
					</Link>
				</div>
				<div className='border hover:border-gray-700 hover:bg-gray-100 py-2 px-5 text-center w-32'>
					<Link href='/paddleboards/hard-top'>
						<a>Hard</a>
					</Link>
				</div>
				<div className='border hover:border-gray-700 hover:bg-gray-100 py-2 px-5 text-center w-32'>
					<Link href='/paddleboards/inflatable'>
						<a>Inflatable</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
