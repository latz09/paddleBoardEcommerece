import Image from 'next/image';

const BoardImages = ({ imagesByColor }) => {
	const images = Object.values(imagesByColor);

	return (
		<div>
			<Image
				src={images[0]}
				width={300}
				height={400}
				alt={`image of the selected paddleboard`}
			/>
		</div>
	);
};

export default BoardImages;
