import Image from 'next/image';

const BoardImages = ({ images, colors }) => {
	return (
		<div className=''>
			<div className='pt-8 md:pt-0'>
				<Image
					src={images.main}
					width={300}
					height={400}
					alt={`image of the selected paddleboard`}
				/>
			</div>

			<div className='flex justify-center space-x-4'>
				{colors.map((color) => (
					<button
						key={color}
						className={`h-8 w-8 rounded-full ${
							color === 'blue' ? 'bg-board-blue' : ''
						} ${color === 'coral' ? 'bg-board-coral' : ''} ${
							color === 'green' ? 'bg-board-green' : ''
						} `}
					></button>
				))}
			</div>
		</div>
	);
};

export default BoardImages;
