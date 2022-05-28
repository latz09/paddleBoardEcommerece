import AccessoriesNavBar from '../utils/AccessoriesNav';
import GearItem from './GearItem';
import Link from 'next/link'

const AllGear = ({ data }) => {

    
	return (
		<>
			<AccessoriesNavBar />
			<div className='card'>
				{data.map(x => (
                    
                    <Link href={`/gear/${x._id}`} key={x._id}>
                        <li>
                            <GearItem itemImage={x.image} name={x.name} price={x.price}/>
                        </li>
                    </Link>
                ))}
			</div>
		</>
	);
};

export default AllGear;

// data is in mongodb for accessories
// api created and the data is in this page

// next
//render the pages..similarly to how i did the boards
//send to cart
//create remove cart functionality

//in this page render gearItem...create that
