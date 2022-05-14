import BoardItem from '../../components/boards/BoardItem';
import NavBar from '../../components/utils/NavBar';

const AllBoardsPage = ({ data }) => {
	const boards = data.paddleBoards;
	console.log(boards);

	return (
		<>
			<NavBar />
			<div className='card'>
				{boards.map((x) => (
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

export default AllBoardsPage;

export async function getStaticProps() {
	const res = await fetch('http://localhost:3000/api/paddleboards');
	const data = await res.json();

	return {
		props: {
			data,
		},
	};
}

