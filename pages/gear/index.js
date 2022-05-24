import AllGear from "../../components/gear/AllGear";

const GearPage = ({ data }) => {	
	const allAccessories = data.accessories
	return (
		<div>
			<AllGear data={allAccessories}/>
		</div>
	);
};

export default GearPage;

export async function getStaticProps() {
	const res = await fetch('http://localhost:3000/api/accessories');
	const data = await res.json();

	return {
		props: {
			data,
		},
	};
}