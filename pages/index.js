import BestSellers from '../components/homepage/BestSellers';
import Hero from '../components/homepage/Hero';
import PioneerSection from '../components/homepage/PioneerSection';

export default function Home({ data }) {
	const boards = data.paddleBoards;
	// console.log(boards)

	return (
		<>
			<Hero />
			<div className='pt-8'>
				<BestSellers data={boards} />
			</div>
			<div>
				<PioneerSection />
			</div>
		</>
	);
}

export async function getStaticProps() {
	const res = await fetch('http://localhost:3000/api/paddleboards');

	const data = await res.json();

	return {
		props: {
			data,
		},
	};
}
