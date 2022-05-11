import { BsBoxSeam, BsHandThumbsUp, BsShieldCheck } from 'react-icons/bs';

const Offerings = () => {
	return (
		<div className='bg-blue-900 text-gray-100 font-bold grid gap-8 p-4 md:flex md:flex-row'>
			<div className='flex items-center space-x-6'>
				<BsBoxSeam className='text-4xl' />
				<div>
					<p className="text-lg">FAST &amp; FREE SHIPPING</p>
					<p className='font-normal'>
						Standard shipping is free on all orders. Items are shipped same or
						next day
					</p>
				</div>
			</div>
			<div className='flex items-center space-x-6'>
				<BsHandThumbsUp className='text-4xl' />
				<div>
					<p className="text-lg">60 DAY GUARANTEE</p>
					<p className='font-normal'>
						We offer a 60 day trial period from the date of purchase
					</p>
				</div>
			</div>
			<div className="flex items-center space-x-6">
				<BsShieldCheck className='text-4xl' />
				<div>
					<p className="text-lg">LIMITED WARRANTY</p>
					<p className='font-normal'>
						Limited warranty of two years on inflatables and one year for hard
						boards
					</p>
				</div>
			</div>
		</div>
	);
};

export default Offerings;
