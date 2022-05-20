//MANAGE ALL CART ITEMS FROM DATABASE IN HERE PASS AROUND DATA THROUGH PROPS

import ItemsDisplay from './ItemDisplay';

const CartDisplay = ({ items }) => {
	return (
		<div className='mb-6 text-gray-800 font-semibold tracking-wider'>
			<div className='p-2'>
				<h1 className='pb-8 text-lg'>Shopping Cart</h1>
				<div className='h-screen flex flex-col space-y-8'>
					{items.map((item) => (
						<ul key={item._id}>
							<ItemsDisplay
								name={item.name}
								style={item.style}
								salePrice={item.salePrice}
								image={item.image.main}
							/>
						</ul>
					))}
				</div>
			</div>
		</div>
	);
};

export default CartDisplay;
