const Selections = ({ colors, length }) => {
	return (
		<div className='sm:flex sm:justify-between pt-4'>
			<div>
				<h1 className='font-bold'>Select Board Length</h1>
				<p>{length}</p>
			</div>

			<div>
				<ul className=' text-gray-500 flex'>
					<h1 className='font-bold'>Select Board Design:</h1>
					{colors.map((color) => (
						<div key={color} className="sm:flex pl-2 pr-2">
							<li  className=''>
								{color} 
							</li>
						</div>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Selections;
