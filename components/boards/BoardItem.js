import Image from 'next/image';
// import x from '../../'

const BoardItem = ({ name, length, price, salePrice, image }) => {
	return (
		<>
			<div className='item-container'>
				<Image
					src={image}
					width={500}
					height={700}
					alt={`Picture of ${name} paddleboard`}
				/>

				<div className='grid grid-rows-3 place-content-center justify-items-center font-bold gap-2'>
					<div className='flex space-x-2 place-content-center'>
						<div className='h-4 w-4 rounded-full bg-board-blue'></div>
						<div className='h-4 w-4 rounded-full bg-board-green'></div>
						<div className='h-4 w-4 rounded-full bg-board-coral'></div>
					</div>
					<div className='text-xl'>
						<div className='flex space-x-1'>
							<div>{name}</div>
							<div>|</div>
							<div>{length}</div>
						</div>
					</div>
					<div className='flex space-x-4 items-center'>
						<p className='text-orange-500 line-through decoration-2'>{price}</p>
						<p className='text-2xl'>{salePrice} </p>
					</div>
				</div>
			</div>
		</>
	);
};

export default BoardItem;
