const Description = ({title, description}) => {
	return (
		<div className='grid row-end-3 gap-4'>
			<h1 className='text-6xl font-bold'>{title}</h1>
			<p className='text-2xl text-gray-500 '>Stand Up Paddle Board Package</p>
			<p className='text-md tracking-wider text-gray-700 '>{description}</p>
		</div>
	);
};

export default Description;
