//MANAGE ALL CART ITEMS FROM DATABASE IN HERE PASS AROUND DATA THROUGH PROPS
import { v4 as uuid } from 'uuid';
import CheckOutBtn from '../utils/CheckOutBtn';
import BoardItemsDisplay from './BoardItemDisplay';
import GearItemDisplay from './GearItemDisplay';
import ShopNowBtn from '../utils/ShopNowBtn';
const CartDisplay = ({ items }) => {
	const count = items.length;

	const boardCartItems = items.filter((item) => item.category === 'boards');

	const gearCartItems = items.filter(
		(item) =>
			item.category === 'bags' ||
			item.category === 'paddles' ||
			item.category === 'pumps'
	);

	const totalBoardCost = boardCartItems.reduce(
		(prev, next) => prev + next.salePrice,
		0
	);

	const totalGearCost = gearCartItems.reduce(
		(prev, next) => prev + next.price,
		0
	);

	return (
		<div className='mb-6 text-gray-800 font-semibold tracking-wider max-w-3xl mx-auto'>
			<div className='p-2'>
				{count > 0 && (
					<div className='grid justify-end'>
						<h1 className='pr-4'>Items: {items.length}</h1>
						<h1 className='pr-4'>Total: ${totalBoardCost + totalGearCost}</h1>
						<div className='pr-4'>
							<CheckOutBtn />
						</div>
					</div>
				)}
				{count > 0 && <h1 className='pb-8 text-lg'>Shopping Cart</h1>}
				{count === 0 && (
					<div className='flex items-center justify-center space-x-12 text-white h-72'>
						<h1 className='text-gray-800'>Your cart is empty</h1>
						<ShopNowBtn />
					</div>
				)}
				{count > 0 && (
					<div className='flex flex-col space-y-8'>
						{boardCartItems.map((item) => (
							<ul key={item._id}>
								<BoardItemsDisplay
									name={item.name}
									style={item.style}
									salePrice={item.salePrice}
									image={item.image.main}
									color={item.colors[0]}
									id={item._id.toString()}
								/>
							</ul>
						))}
						{gearCartItems.map((item) => (
							<ul key={item._id}>
								<GearItemDisplay
									name={item.name}
									image={item.image}
									category={item.category}
									price={item.price}
									id={item._id.toString()}
								/>
							</ul>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default CartDisplay;
