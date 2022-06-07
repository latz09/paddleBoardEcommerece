import BoardDisplay from '../../../components/boards/details/BoardDisplay';
import connectToDatabase from '../../../lib/mongodb';

const Details = ({ boards }) => {
	return (
		<div>
			<BoardDisplay data={boards} />{' '}
		</div>
	);
};

export async function getStaticPaths() {
	const client = await connectToDatabase;
	const db = client.db();
	const paddleBoardsCollection = db.collection('PaddleBoards');
	const data = await paddleBoardsCollection.find().toArray();

	const paths = data.map((item) => {
		return {
			params: { paddleBoardId: item._id.toString() },
		};
	});
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const client = await connectToDatabase;
	const db = client.db();
	const selectedBoard = (
		await db.collection('PaddleBoards').find().toArray()
	).filter((board) => board._id.toString() === params.paddleBoardId)[0];

	return {
		props: { boards: JSON.parse(JSON.stringify(selectedBoard)) },
	};
}

export default Details;
