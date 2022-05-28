import AllGear from '../../components/gear/AllGear';
import { connectToDatabase } from '../../lib/mongodb';

const GearPage = ({ gear }) => {
	return (
		<div>
			<AllGear data={gear} />
		</div>
	);
};

export default GearPage;

export async function getStaticProps() {
	const db = await connectToDatabase();
	const gearCollection = db.collection('accessories');
	const data = await gearCollection.find().toArray();

	return {
		props: { gear: JSON.parse(JSON.stringify(data)) },
	};
}
