import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useState } from 'react';

const BoardSpecs = ({ length, width, thickness, weight, capacity }) => {
	const [isOpen, setOpen] = useState(true);

	const toggleSpecs = () => {
		{
			!isOpen ? setOpen(true) : setOpen(false);
		}
	};

	return (
		<div>
			<div className='text-md mt-4 mb-4 pt-2 pb-2 flex justify-between content-center border-b-2'>
				<div className='font-semibold tracking-wide'>BOARD SPECS</div>
				<button onClick={toggleSpecs} className='text-2xl'>
					<div>{isOpen ? <AiOutlinePlus /> : <AiOutlineMinus />}</div>
				</button>
			</div>

			<div
				className={`${
					isOpen
						? 'hidden'
						: 'text-md grid p-2 bg-gray-200 border border-blue-600'
				}`}
			>
				<div className='flex justify-around py-4 bg-gray-100 lg:text-lg'>
					<div className='text-center'>
						<p className='font-semibold'>LENGTH</p>
						<div>{length}</div>
					</div>
					<div className='text-center'>
						<p className='font-semibold'>WIDTH</p>
						<div>{width}</div>
					</div>
					<div className='text-center'>
						<p className='font-semibold'>THICK</p>
						<div>{thickness}</div>
					</div>
					<div className='text-center'>
						<p className='font-semibold'>WEIGHT</p>
						<div>{weight}</div>
					</div>
					<div className='text-center'>
						<p className='font-semibold'>CAPACITY</p>
						<div>{capacity}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BoardSpecs;
