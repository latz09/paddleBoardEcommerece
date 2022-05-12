import Navbar from '../utils/NavBar';
import BoardItem from '../BoardItem';

const AllBoards = () => {
	return (
		<div>
			<Navbar />
			<div className='py-10 px-6 gap-2 grid grid-cols-2 md:grid-cols-3 md:px-20 md:gap-8 max-w-6xl mx-auto'>
				<div>
					<BoardItem />
				</div>
				<div>
					<BoardItem />
				</div>
	
		
			</div>
		</div>
	);
};

export default AllBoards;

// create a navbar for the allboards page that will link between hard-top and inflatables.

//next will be rendering the different boards for each page

//also need to render boards for the best seller section on the home page
