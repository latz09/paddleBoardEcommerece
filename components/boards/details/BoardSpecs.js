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

			<div className={`${isOpen ? 'hidden' : ''}`}>
				<table className='text-md flex flex-col p-2 bg-gray-200'>
					<thead className='grid grid-cols-5'>
						<th>LENGTH</th>
						<th>WIDTH</th>
						<th>THICK</th>
						<th>WEIGHT</th>
						<th>CAPACITY</th>
					</thead>

					<tbody className='grid grid-cols-5 text-center font-semibold tracking-wide text-sm'>
						<div>{length}</div>
						<div>{width}</div>
						<div>{thickness}</div>
						<div>{weight}</div>
						<div>{capacity}</div>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default BoardSpecs;
