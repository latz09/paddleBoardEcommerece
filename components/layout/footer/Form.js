import { AiOutlineArrowRight } from 'react-icons/ai';
import { useRef } from 'react';
import { useRouter } from 'next/router'

const Form = () => {
	const emailInputRef = useRef();
	const router = useRouter()

	

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
		router.push('/')
	
	};

	return (
		<>
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
