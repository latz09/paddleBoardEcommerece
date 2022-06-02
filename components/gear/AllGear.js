import GearItem from './GearItem';
import Link from 'next/link';

const AllGear = ({ data }) => {
	return (
		<>
			<div className='card'>
				{data.map((x) => (
					<Link href={`/gear/${x._id}`} key={x._id}>
						<li>
							<GearItem itemImage={x.image} name={x.name} price={x.price} />
						</li>
					</Link>
				))}
			</div>
		</>
	);
};

export default AllGear;
