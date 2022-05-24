const Description = ({title, description, tag}) => {
	return (
		<div className='grid row-end-3 gap-4'>
			<h1 className='text-6xl font-bold'>{title}</h1>
			<p className='text-2xl text-gray-500 '>{tag}</p>
			<p className='text-md tracking-wider text-gray-700 '>{description}</p>
		</div>
	);
};

export default Description;
//Stand Up Paddle Board Package