import BoardItem from '../../components/boards/BoardItem';
import NavBar from '../../components/utils/NavBar';

const hardTopPaddleBoardsPage = ({ data }) => {
	const boards = data.paddleBoards;
	const hardTopBoards = boards.filter((board) => board.style === 'hardtop');

	return (
		<>
			<NavBar />
			<div className='card'>
				{hardTopBoards.map((x) => (
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
		</>
	);
};

export default hardTopPaddleBoardsPage;

export async function getStaticProps() {
	const res = await fetch('http://localhost:3000/api/paddleboards');
	const data = await res.json();

	return {
		props: {
			data,
		},
	};
}
