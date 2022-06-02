import BestSellers from '../components/homepage/BestSellers';
import Hero from '../components/homepage/Hero';
import PioneerSection from '../components/homepage/PioneerSection';
import { connectToDatabase } from '../lib/mongodb';

export default function Home({ bestSellingBoards }) {
	return (
		<>
			<div className="bg-gray-100">
				<Hero />
			</div>
			<div className='pt-8'>
				<BestSellers data={bestSellingBoards} />
			</div>
			<div>
				<PioneerSection />
			</div>
		</>
	);
}

export async function getStaticProps() {
	const db = await connectToDatabase();
	const paddleBoardsCollection = db.collection('PaddleBoards');
	const data = await paddleBoardsCollection
		.find({ isBestSeller: true })
		.toArray();

	return {
		props: { bestSellingBoards: JSON.parse(JSON.stringify(data)) },
	};
}
