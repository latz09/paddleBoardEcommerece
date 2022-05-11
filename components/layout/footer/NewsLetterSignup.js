import Form from './Form';

const NewsLetterSignup = () => {
	return (
		<>
			<div className='text-base flex flex-col place-items-center'>
				<h1 className='font-bold tracking-wide'>SIGN UP FOR OUR NEWSLETTER</h1>
				<p>Get exclusive insider access to products and promotions:</p>
				<div className="pt-5">
					<Form />
				</div>
			</div>
		</>
	);
};

export default NewsLetterSignup;
