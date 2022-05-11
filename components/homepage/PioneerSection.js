import ShopNowBtn from "../utils/ShopNowBtn";
import Image from 'next/image'

import pioneer from '../../public/images/pioneer.avif'

const PioneerSection = () => {
	return (
		<div className="bg bg-gray-100">
			<h1 className='font-bold text-xl tracking-wide text-center py-10'>
				LEARN MORE ABOUT OUR BEST SELLING BOARD
			</h1>
            <div className="font-light text-lg text-gray-500">
                <h3 className="text-xl text-center pb-2 font-semibold">Introducing the Pioneer:</h3>
                <p className="leading-7 text-center px-6">A board with maximum stability, all star performance, and a clean, beautiful design. We asked our customers what they wanted most in a paddle board and this is it: The most versatile inflatable in our collection features a wider deck, a sleek, refined look, and performs well in all water conditions and activities. The Pioneer even fits into a backpack when deflated, for easy transport to any destination. Find out for yourself why it is our number one seller.</p>
            </div>
            <div className="text-center pt-12">
                <ShopNowBtn />
            </div>
            <div className="py-16 text-center">
                <Image src={pioneer} alt='image of pioneer paddleboard'/>
            </div>
		</div>
	);
};

export default PioneerSection;
