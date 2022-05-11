import Link from 'next/link';

const Logo = () => {
	return (
		<>
			<Link href={'/'}>
				<a className='text-6xl tracking-widest'>ISLE</a>
			</Link>
		</>
	);
};

export default Logo;
