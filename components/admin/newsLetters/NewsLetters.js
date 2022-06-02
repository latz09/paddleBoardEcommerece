const NewsLetters = ({ emails }) => {
	return (
		<div>
			<ul className='grid grid-cols-1 gap-6 pb-28 pt-4 tracking-wider '>
				{emails.map((email) => (
					<li
						key={email._id}
						className='border-2 p-2 bg-gray-100 shadow-md hover:shadow-lg hover:bg-gray-200'
					>
						<div className='items-center text-gray-400'>
							<div className=''>
								<h1>
									Email:
									<span className='text-gray-800 text-lg'>{email.email}</span>
								</h1>
							</div>
							<div>
								<h1>
									Registered:
									<span className='text-gray-800'>{email.date}</span>
								</h1>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NewsLetters;
