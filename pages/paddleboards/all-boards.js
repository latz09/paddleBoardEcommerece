import BoardItem from '../../components/boards/BoardItem';
import PaddleBoardNav from '../../components/utils/PaddleBoardNav';
import Link from 'next/link';
import { connectToDatabase } from '../../lib/mongodb';

const AllBoardsPage = ({ boards }) => {
	return (
		<>
			<PaddleBoardNav />
			<div className='card'>
				{boards.map((x) => (
					<Link href={`/paddleboards/${x._id}`} key={x.id}>
						<li>
							<BoardItem
								name={x.name}
								image={x.image.main}
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
	const db = await connectToDatabase();
	const paddleBoardsCollection = db.collection('PaddleBoards');
	const data = await paddleBoardsCollection.find().toArray();

	return {
		props: { boards: JSON.parse(JSON.stringify(data)) },
	};
}
