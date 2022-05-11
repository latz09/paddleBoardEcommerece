import { AiOutlineArrowRight } from 'react-icons/ai';

const Form = () => {
	return (
		<>
			<div className='flex content-center'>
				<label htmlFor='email'></label>
				<input
					type='text'
					id='email'
					placeholder='Enter email'
					className='px-4 py-2'
				/>
				<div className="bg-orange-400 p-3">
					<AiOutlineArrowRight onClick={() => {
					 console.log('test')
					}}/>
				</div>
			</div>
		</>
	);
};

export default Form;
