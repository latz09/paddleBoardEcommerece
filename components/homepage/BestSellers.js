import { FilteredBestSellers } from "../boards/AllBoards";

const BestSellers = () => {
	return (
		<div>
			<h1 className='font-bold text-2xl tracking-wider text-center'>
				SHOP BEST SELLERS
			</h1>
			<FilteredBestSellers/>
            
		</div>
	);
};

export default BestSellers;
