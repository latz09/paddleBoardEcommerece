import Link from 'next/link';
import BoardItem from '../../components/boards/BoardItem';
import NavBar from '../../components/utils/NavBar';

const hardTopPaddleBoardsPage = ({ data }) => {
	const allBoards = data.paddleBoards;
	const hardTopBoards = allBoards.filter((board) => board.style === 'hardtop');

	return (
		<>
			<NavBar />
			<div className='card'>
				{hardTopBoards.map((x) => (
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
