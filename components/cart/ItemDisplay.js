import Image from 'next/image';

import blue from '../../public/images/Hardtop_paddleboards/Cruiser/blue.avif';
import BoardSpecs from '../boards/details/BoardSpecs';

const ItemsDisplay = ({ image }) => {
	return (
		<div className='grid grid-cols-3 gap-7 border-b pb-4 shadow shadow-board-blue'>
			<div className='border px-4 py-2'>
				<Image src={blue} width={100} height={125} alt={`Picture of `} />
			</div>
			<div className='grid content-around'>
				<h1 className='font-semibold'>Voyager</h1>
				<p className='text-gray-400'>Coral</p>
				<p className='text-gray-400'>Qty: 1</p>
			</div>
			<div className='grid content-evenly justify-items-end mr-4'>
				<div className='self-start tracking-wide'>$ 1445</div>
				<button className='tracking-wider text-board-blue font-semibold'>Remove</button>
			</div>
		</div>
	);
};

export default ItemsDisplay;

//	<Image src={blue} width={100} height={150} alt={`Picture of `} />
// place-self-end self-start
