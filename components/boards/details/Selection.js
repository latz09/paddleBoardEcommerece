const Selections = ({ colors, length }) => {
	return (
		<div className='sm:flex sm:justify-between pt-4'>
			<div>
				<h1 className='font-bold'>Board Length</h1>
				<p>{length}</p>
			</div>

			<div>
				<ul className="flex items-center space-x-2">
					<h1 className='font-bold'>Select Board Color</h1>
					{colors.map((color) => (
						<div key={color} className='sm:flex pl-2 pr-2'>
							<div
								className={`font-semibold rounded-full 
								text-xs p-2 sm:p-2 sm:text-base text-white ${
									color === 'blue' ? 'bg-board-blue' : ''
								} ${color === 'coral' ? 'bg-board-coral' : ''} ${
									color === 'green' ? 'bg-board-green' : ''
								}`}
							>
								<li className=''>{color}</li>
							</div>
						</div>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Selections;
