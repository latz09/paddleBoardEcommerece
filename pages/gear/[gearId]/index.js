import GearDisplay from '../../../components/gear/GearDisplay';
import { connectToDatabase } from '../../../lib/mongodb';

const GearDetails = ({ item }) => {
	return (
		<div className="p-4 max-w-4xl mx-auto">
			<GearDisplay item={item} />
		</div>
	);
};

export async function getStaticPaths() {
	const db = await connectToDatabase();
	const gearCollection = db.collection('accessories');
	const data = await gearCollection.find().toArray();

	const paths = data.map((item) => {
		return {
			params: { gearId: item._id.toString() }, //change paddleboard to id and/or stringify _id??
			//you have access to the params in getStaticProps
			//each path contains the params that are passed to getStaticProps
		};
	});

	return {
		paths,
		fallback: false,
	};
}
export async function getStaticProps({ params }) {
	const db = await connectToDatabase();
	const selectedGearItem = (
		await db.collection('accessories').find().toArray()
	).filter((gearItem) => gearItem._id.toString() === params.gearId)[0];

	return {
		props: { item: JSON.parse(JSON.stringify(selectedGearItem)) },
	};
}

export default GearDetails;