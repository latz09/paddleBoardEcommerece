import { AiOutlineArrowRight } from 'react-icons/ai';
import { useRef } from 'react';
import { useState } from 'react';

const Form = () => {
	const emailInputRef = useRef();
	const [registered, setregistered] = useState(false);

	const newsletterHandler = (event) => {
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;
		const currentDate = new Date();
		const month = currentDate.getMonth() + 1;
		const day = currentDate.getDate();
		const year = currentDate.getFullYear();

		const createdOnDate = `${month}/${day}/${year}`;

		fetch('/api/newsletter', {
			method: 'POST',
			body: JSON.stringify({ email: enteredEmail, date: createdOnDate }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data));

		emailInputRef.current.value = '';
		setregistered(true);
		setTimeout(() => {
			setregistered(false);
		}, 3000);
	};

	return (
		<>
			<h1
				className={` ${
					!registered
						? 'hidden'
						: 'text-center p-3 font-semibold tracking-wider text-orange-500'
				}`}
			>
				{' '}
				Email registered!
			</h1>
			<form onSubmit={newsletterHandler} className='flex content-center'>
				<label htmlFor='email'></label>
				<input
					type='email'
					id='email'
					placeholder='Enter email'
					className='px-4 py-2'
					ref={emailInputRef}
				/>
				<button className='bg-orange-400 p-3 hover:bg-orange-500 hover:text-white'>
					<AiOutlineArrowRight />
				</button>
			</form>
		</>
	);
};

export default Form;
