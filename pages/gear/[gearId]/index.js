import GearDisplay from '../../../components/gear/GearDisplay';

const GearDetails = ({ item }) => {
	return (
		<div className="p-4 max-w-4xl mx-auto">
			<GearDisplay item={item} />
		</div>
	);
};

export const getStaticPaths = async () => {
	const res = await fetch('http://localhost:3000/api/accessories');
	const data = await res.json();
	const items = data.accessories;
	const paths = items.map((item) => {
		return {
			params: { gearId: item._id.toString() },
		};
	});
	return {
		fallback: false,
		paths,
	};
};

export const getStaticProps = async (context) => {
	const gearId = context.params.gearId;
	const res = await fetch('http://localhost:3000/api/accessories');
	const data = await res.json();
	const accessories = data.accessories;

	const item = accessories
		.filter((item) => item._id === gearId)
		.reduce((prev, current) => {
			prev[current.id] === current;
			return prev;
		});

	return {
		props: { item },
	};
};

export default GearDetails;
