import Image from 'next/image';
import Description from '../boards/details/Description';
import fixed from '../../public/images/Accessories/Paddles/fixed.avif';
import AddToCartBtn from '../boards/details/AddToCartBtn';

const GearDisplay = ({ item }) => {
	return (
		<div className='flex flex-col items-center justify-items-center space-y-4 space-x-2'>
			<div className="grid gap-3">
				<h1 className="text-4xl font-bold text-center">{item.name}</h1>
				<p className="text-md tracking-wider text-gray-700 text-center">{item.description_short}</p>
			</div>
			<div>
				<Image
					src={item.image}
					alt={`Picture of ${item.image}`}
					width={200}
					height={300}
				/>
			</div>
			<div>
				<h1 className='text-4xl sm:text-5xl font-semibold'>${item.price}</h1>
			</div>
			<div>
				<AddToCartBtn />
			</div>
			<div>
            <p className="text-md tracking-wider text-gray-700 text-center">{item.description_long}</p>
			</div>
		</div>
	);
};

export default GearDisplay;
