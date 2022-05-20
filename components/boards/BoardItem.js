import Image from 'next/image';

const BoardItem = ({ name, length, price, salePrice, image }) => {
	return (
		<>
			<div className='p-3 bg-gray-50 shadow tracking-wide hover:shadow-md hover:hue-rotate-15'>
				<div>
					<Image
						src={image}
						width={500}
						height={700}
						alt={`Picture of ${name}`}
					/>
				</div>
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
