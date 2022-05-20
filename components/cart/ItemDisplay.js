import Image from 'next/image';

const ItemsDisplay = ({ name, style, salePrice, image }) => {
	return (
		<div className='cart-card'>
			<div className='border-r mt-3 px-4 py-2'>
				<Image src={image} width={100} height={125} alt={`Picture of `} />
			</div>
			<div className='grid content-around'>
				<h1 className='font-semibold text-xl text-gray-800'>{name}</h1>
				<p>coral</p>
				<p>Qty: 1</p>
				<p>{style}</p>
			</div>
			<div className='grid content-evenly justify-items-end mr-4'>
				<div className='self-start tracking-wide text-gray-800'>
					$ {salePrice}
				</div>
				<button className='tracking-wider text-board-blue font-semibold'>
					Remove
				</button>
			</div>
		</div>
	);
};

export default ItemsDisplay;
