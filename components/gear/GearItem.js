import Image from 'next/image';

const GearItem = ({ itemImage, name, price }) => {
	return (
		<>
			<div className="item-container">
				<div className='text-center'>
					<Image
						src={itemImage}
						alt={`image of ${name}`}
						height={150}
						width={175}
					/>
					<div className='text-xl p-3'>{name}</div>
					<div className='text-2xl'>${price}</div>
				</div>
			</div>
		</>
	);
};

export default GearItem;
