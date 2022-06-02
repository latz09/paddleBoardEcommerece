// =============BOARD ITEM DISPLAY




import Image from 'next/image';
import {useContext} from 'react'
import { CartContext } from '../../contexts/cartContext';
 
const BoardItemsDisplay = ({ name, style, salePrice, image, color, id }) => {

	const cartCtx = useContext(CartContext)

	const removeItemFromCart = () => {
		// cartCtx.removeItemFromCart(id)	
		// // console.log(cartCtx.cartItems) 
	
		console.log('test')
	};
	return (
		<div className='cart-card'>
			<div className='border-r mt-3 px-4 py-2 text-center'>
				<Image
					src={image}
					width={100}
					height={125}
					alt={`Picture of ${name}`}
				/>
			</div>
			<div className='grid content-around'>
				<h1 className='font-semibold text-xl text-gray-800'>{name}</h1>
				<p>{color}</p>
				<p>Qty: 1</p>
				<p>{style}</p>
			</div>
			<div className='grid content-evenly justify-items-end mr-4'>
				<div className='self-start tracking-wide text-gray-800'>
					$ {salePrice}
				</div>
				<button
					onClick={removeItemFromCart}
					className='tracking-wider text-board-blue font-semibold'
				>
					Remove
				</button>
			</div>
		</div>
	);
};

export default BoardItemsDisplay;
