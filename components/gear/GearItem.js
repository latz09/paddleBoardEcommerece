import Image from 'next/image';
import imageHolder from '../../public/images/Accessories/Paddles/fixed.avif';

const GearItem = ({ itemImage, name, price }) => {
	return (
		<>
			<div className='item-container text-center'>
				<Image
					src={itemImage}
					alt={`image of ${name}`}
					height={150}
					width={175}
				/>
				<div className='text-xl p-3'>{name}</div>
				<div className='text-2xl'>${price}</div>
			</div>
		</>
	);
};

export default GearItem;
