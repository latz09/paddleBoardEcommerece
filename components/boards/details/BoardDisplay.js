import Description from './Description';
import BoardSpecs from './BoardSpecs';
import Selections from './Selection';
import AddToCartBtn from './AddToCartBtn';
import BoardImages from './BoardImages';
import { useState, useContext } from 'react';
import { CartContext } from '../../../contexts/cartContext';

const BoardDisplay = ({ data }) => {
	const cartCtx = useContext(CartContext)

	const [addToCart, setAddToCart] = useState(false);

	const specs = data.specs;
	const images = data.image;
	const colors = data.colors;

	const sendDataToCart = () => {
		cartCtx.addItemToCart(data)
		
	
		setAddToCart(true);
		setTimeout(() => {
			setAddToCart(false);
		}, 7000);
	};
	

	return (
		<div className='p-4 md:flex items-center lg:mx-auto lg:max-w-7xl md:my-16 cursor-pointer'>
			<div className='text-center md:w-1/2'>
				<div className='md:hidden'>
					<Description
						title={data.name}
						description={data.description}
						tag='Stand Up Paddle Board Package'
					/>
				</div>
				<BoardImages images={images} colors={colors} />
			</div>

			<div className='md:w-1/2'>
				<div className='hidden md:inline-flex'>
					<Description title={data.name} description={data.description} />
				</div>
				<BoardSpecs
					length={specs.Length}
					width={specs.Width}
					thickness={specs.Thickness}
					weight={specs.Weight}
					capacity={specs.Capacity}
				/>
				<Selections colors={data.colors} length={specs.Length} />
				<div className='pt-8'>
					<h1 className='text-4xl sm:text-5xl font-semibold'>
						${data.salePrice}
					</h1>
				</div>

				<div className='pt-4'>
					<AddToCartBtn data={sendDataToCart} />
				</div>

				{/* //*/}
				<h1
					className={`${
						!addToCart
							? 'hidden'
							: 'text-orange-500 tracking-wide text-center text-2xl p-3 '
					}`}
				>
					<p className='m-3'> added to cart!</p>
				</h1>
			</div>
		</div>
	);
};

export default BoardDisplay;

//design the BoardDisplay

//all data is in [paddleBoardId]/index.js
//send all the data to this component and work with it through there.
