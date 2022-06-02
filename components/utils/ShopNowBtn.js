import Link from 'next/link';

const ShopNowBtn = () => {
	return (
		<Link href='/paddleboards/all-boards'>
			<a className="font-bold bg-orange-400 p-2 sm:px-4 sm:py-4 text-xs rounded shadow-md tracking-widest hover:bg-orange-600">SHOP NOW</a>
		</Link>
	);
};

export default ShopNowBtn;
