//MANAGE ALL CART ITEMS FROM DATABASE IN HERE PASS AROUND DATA THROUGH PROPS
import { v4 as uuid } from 'uuid';
import CheckOutBtn from '../utils/CheckOutBtn';
import ItemsDisplay from './ItemDisplay';

const CartDisplay = ({ items }) => {
	const totalCost = items.reduce((prev, next) => prev + next.salePrice, 0);

	return (
		<div className='mb-6 text-gray-800 font-semibold tracking-wider'>
			<div className='p-2'>
				<div className='grid justify-end'>
					<h1 className='pr-4'>Items: {items.length}</h1>
					<h1 className='pr-4'>Total: ${totalCost}</h1> 
					<div className='pr-4'>
						<CheckOutBtn />
					</div>
				</div>
				<h1 className='pb-8 text-lg'>Shopping Cart</h1>
				<div className='h-screen flex flex-col space-y-8'>
					{items.map((item) => (
						<ul key={item.id}>
							<ItemsDisplay
								name={item.name}
								style={item.style}
								salePrice={item.salePrice}
								image={item.image.main}
								color={item.colors[0]}
							/>
						</ul>
					))}
				</div>
			</div>
		</div>
	);
};

export default CartDisplay;
