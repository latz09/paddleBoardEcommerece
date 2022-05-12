import Image from 'next/image';
import gliderMock from '../public/images/gliderMock.avif';

const BoardItem = () => {
	return (
		<div className='p-3 bg-gray-50 shadow-md tracking-wide'>
			<div>
				<Image src={gliderMock} alt='picture' />
			</div>
			<div className='grid grid-rows-3 place-content-center justify-items-center font-bold gap-2'>
				<div className='flex space-x-2 place-content-center'>
					<div className='h-4 w-4 rounded-full bg-blue-700'></div>
					<div className='h-4 w-4 rounded-full bg-green-600'></div>
					<div className='h-4 w-4 rounded-full bg-red-300'></div>
				</div>
				<div className='text-xl'>
					<div className="flex space-x-1">
						<div>Glider</div>
						<div>|</div>
						<div>10 5</div>
					</div>
				</div>
				<div className="flex space-x-4 items-center">
					<p className="text-orange-500 line-through decoration-2">$1,395</p>
					<p className="text-2xl">$1,345</p>
				</div>
			</div>
		</div>
	);
};

export default BoardItem;
