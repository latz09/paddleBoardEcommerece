import Link from 'next/link';
import BoardItem from '../../components/boards/BoardItem';
import PaddleBoardNav from '../../components/utils/PaddleBoardNav';
import connectToDatabase from '../../lib/mongodb';

const inflatablePaddleBoardsPage = ({ boards }) => {
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
								length={x.specs.Length}
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

export default inflatablePaddleBoardsPage;

export async function getStaticProps() {
	const client = await connectToDatabase;
	const db = client.db();
	const paddleBoardsCollection = db.collection('PaddleBoards');
	const data = await paddleBoardsCollection
		.find({ style: 'inflatable' })
		.toArray();

	return {
		props: { boards: JSON.parse(JSON.stringify(data)) },
	};
}
