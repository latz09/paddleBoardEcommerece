import BestSellers from '../components/homepage/BestSellers';
import Hero from '../components/homepage/Hero';
import PioneerSection from '../components/homepage/PioneerSection';

export default function Home() {
	return (
		<>
			<div>
				<Hero />
			</div>
			<div className='pt-8'>
				<BestSellers />
			</div>
			<div>
				<PioneerSection />
			</div>
		</>
	);
}

// import { PADDLEBOARDS } from '../data/PaddleBoards';
// import Image from 'next/image';
// const hardTopPaddleboards = PADDLEBOARDS.hardTop_PaddleBoards;
// const inflatablePaddleboards = PADDLEBOARDS.inflatable_paddleBoards;
// {hardTopPaddleboards.map((paddleBoard1) => (
//   <li key={paddleBoard1.id} className="text-center">
//     name: {paddleBoard1.name}
//     <Image
//       src={paddleBoard1.image.main}
//       alt={`Image of ${paddleBoard1.name}`}
    //   width={500}
    //   height={500}
//     />
//   </li>
// ))}
