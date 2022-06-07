import Description from './Description';
import BoardSpecs from './BoardSpecs';
import Selections from './Selection';
import AddToCartBtn from './AddToCartBtn';
import BoardImages from './BoardImages';
import { useState, useContext } from 'react';
import { CartContext } from '../../../contexts/cartContext';
import { v4 as uuid } from 'uuid';

const BoardDisplay = ({ data }) => {
	const { addItemToCart, cartItems } = useContext(CartContext);
	const [addToCart, setAddToCart] = useState(false);
	const [count, setCount] = useState(1);

	function increment() {
		setCount(count + 1);
	}

	function decrement() {
		if (count === 1) {
			return;
		}
		setCount(count - 1);
	}

	const specs = data.specs;
	const images = data.image;
	const colors = data.colors;

	const sendDataToCart = () => {
		if (count > 1) {
			data = { ...data, qty: count, totalPrice: data.salePrice * count };
		}

		if (cartItems.map((item) => item._id === data._id)) {
			data._id = uuid();
		}
		addItemToCart(data);

		setAddToCart(true);
		setTimeout(() => {
			setAddToCart(false);
		}, 4000);
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
					<AddToCartBtn
						data={sendDataToCart}
						increment={increment}
						decrement={decrement}
						count={count}
						title={`${!addToCart ? 'Add To Cart' : 'Added!'}`}
					/>
				</div>
			</div>
		</div>
	);
};

export default BoardDisplay;
