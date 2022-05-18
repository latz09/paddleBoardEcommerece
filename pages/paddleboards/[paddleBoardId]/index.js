import BoardDisplay from "../../../components/boards/BoardDisplay";



const Details = ({ selectedBoard }) => {
	return (
		<div className='pt-12 flex h-screen justify-around text-3xl'>
			<BoardDisplay name={selectedBoard.name}/>
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
	console.log(boardId);
	const res = await fetch('http://localhost:3000/api/paddleboards');
	const data = await res.json();
	const boards = data.paddleBoards;

	const selectedBoard = boards
		.filter((board) => board._id === boardId)
		.reduce((prev, current) => {
			prev[current.id] === current;
			return prev;
		});

	return {
		props: { selectedBoard },
	};
};

export default Details;
