import BoardItem from "../boards/BoardItem";

const BestSellers = ({ data }) => {
	const allBoards = { data }.data;

	const filteredBoards = allBoards.filter(board => board.isBestSeller === true)

	
	
	return (
		<div>
			<h1 className='font-bold text-2xl tracking-wider text-center'>
				SHOP BEST SELLERS
			</h1>
			<div className='card grid-cols-4'>
				{filteredBoards.map((x) => (
					<li key={x.id}>
						<BoardItem
							name={x.name}
							image={x.image.main}
							length={x.specs.Length}
							price={x.price}
							salePrice={x.salePrice}
						/>
					</li>
				))}
			</div>

		
		</div>
	);
};

export default BestSellers;
