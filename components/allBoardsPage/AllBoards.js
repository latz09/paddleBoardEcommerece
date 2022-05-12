import Navbar from '../utils/NavBar';
import BoardItem from '../BoardItem';

import { PADDLEBOARDS } from '../../data/PaddleBoards';

const AllHardTops = PADDLEBOARDS.hardTop_PaddleBoards;
const AllInflatables = PADDLEBOARDS.inflatable_PaddleBoards;

const AllBoards = () => {
	return (
		<div>
			<Navbar />
			<div className='py-10 px-6 gap-2 grid grid-cols-2 md:grid-cols-3 md:px-20 md:gap-8 max-w-6xl mx-auto list-none'>
				{AllHardTops.map((x) => (
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
				{AllInflatables.map((x) => (
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

export default AllBoards;

//also need to render boards for the best seller section on the home page
