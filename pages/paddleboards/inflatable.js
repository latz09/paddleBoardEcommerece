import Link from 'next/link';

import BoardItem from '../../components/boards/BoardItem';
import NavBar from '../../components/utils/NavBar';



const hardTopPaddleBoardsPage = ({ data }) => {
	const boards = data.paddleBoards;
	const inflatableBoards = boards.filter((board) => board.style === 'inflatable');

	return (
		<>
			<NavBar />
			<div className='card'>
				{inflatableBoards.map((x) => (
					<Link href={`/paddleboards/${x._id}`} key={x.id}>
					<li >
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