import BoardDisplay from '../../../components/boards/details/BoardDisplay';

const Details = ({ board }) => {

	
	return (
		<div>
			<BoardDisplay data={board} />
		</div>
	);
};

export const getStaticPaths = async () => {
	const res = await fetch('http://localhost:3000/api/paddleboards');
	const data = await res.json();
	const boards = data.paddleBoards;
	const paths = boards.map((board) => {
		return {
			params: { paddleBoardId: board._id.toString() },
		};
	});
	return {
		fallback: false,
		paths,
	};
};

export const getStaticProps = async (context) => {
	const boardId = context.params.paddleBoardId;
	const res = await fetch('http://localhost:3000/api/paddleboards');
	const data = await res.json();
	const allBoards = data.paddleBoards;

	const board = allBoards
		.filter((board) => board._id === boardId)
		.reduce((prev, current) => {
			prev[current.id] === current;
			return prev;
		});

	return {
		props: { board },
	};
};

export default Details;
