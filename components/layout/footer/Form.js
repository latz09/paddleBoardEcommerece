import { AiOutlineArrowRight } from 'react-icons/ai';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Form = () => {
	const emailInputRef = useRef();
	const router = useRouter();
	const [registered, setregistered] = useState(false);

	const newsletterHandler = (event) => {
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;

		fetch('/api/newsletter', {
			method: 'POST',
			body: JSON.stringify({ email: enteredEmail }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data));

		emailInputRef.current.value = '';
		setregistered(true);
		console.log(registered);
	};

	return (
		<>
			<h1 className={` ${!registered ? 'hidden' : 'text-center p-3 font-semibold tracking-wider text-orange-500'}`}>Email registered!</h1>
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
