import Image from 'next/image';
import hero from '../../public/images/hero.webp';
import ShopNowBtn from '../utils/ShopNowBtn';

const Hero = () => {
	return (
		<>
			<div className='w-full relative'>
				<div className='w-full h-full top-0 left-0 text-gray-700 font-bold'>
					<div className='w-full absolute top-0 left-0 z-30 flex justify-end'>
						<div className='text-3xl grid p-12 tracking-wide'>
							<p>SITEWIDE</p>
							<p className='text-4xl text-orange-600'>SUMMER</p>
							<p>SALE</p>                            
							<div className="pt-12">
								<ShopNowBtn />
							</div>
						</div>
					</div>
					<Image
						layout='responsive'
						src={hero}
						alt='picture of man paddleboarding'
					/>
				</div>
			</div>
		</>
	);
};

export default Hero;
