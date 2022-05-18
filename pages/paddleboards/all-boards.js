import { MongoClient } from 'mongodb';

import BoardItem from '../../components/boards/BoardItem';
import NavBar from '../../components/utils/NavBar';
import Link from 'next/link';


const URL =
	'mongodb+srv://latz:68383441@paddleboards.dztrf.mongodb.net/PaddleBoardApp?retryWrites=true&w=majority';



const AllBoardsPage = ({ boards }) => {
	const allBoards = boards

	return (
		<>
			<NavBar />
			<div className='card'>
				{allBoards.map((x) => (					
					<Link href={`/paddleboards/${x.id}`} key={x.id}>
					<li>
						<BoardItem
							name={x.name}
							image={x.image}
							length={x.length}
							price={x.price}
							salePrice={x.salePrice}
						/>
					</li>
					</Link>
				))}
			</div>
		</>
	);
};

export default AllBoardsPage;

export async function getStaticProps() {
	const client = await MongoClient.connect(URL)
	const db = client.db();

	const paddleBoardsCollection = db.collection('PaddleBoards')

	const boards = await paddleBoardsCollection.find().toArray()

	client.close();	

	return {
		props: {
			boards: boards.map(board => ({
				name: board.name,
				image: board.image.main,
				length: board.specs.Length,
				price: board.price,
				salePrice: board.salePrice,
				id: board._id.toString(),

			}))
		},
	};
}
