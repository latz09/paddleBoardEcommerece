import Link from 'next/link'
import BoardItem from "../boards/BoardItem";

const BestSellers = ({ data }) => {
	const allBoards = { data }.data;

	const filteredBoards = allBoards.filter(board => board.isBestSeller === true)

	
	
	return (
		<div>
			<h1 className='font-bold text-2xl tracking-wider text-center'>
				SHOP BEST SELLERS
			</h1>
			<div className='card grid-cols-2 sm:grid-cols-4'>
				{filteredBoards.map((x) => (
					<Link href={`/paddleboards/${x._id}`} key={x.id}>
					<li>
						<BoardItem
							name={x.name}
							image={x.image.main}
							length={x.specs.Length}
							price={x.price}
							salePrice={x.salePrice}
						/>
					</li>
					</Link>
				))}
			</div>

		
		</div>
	);
};

export default BestSellers;
