import { PADDLEBOARDS } from '../data/PaddleBoards';
import Image from 'next/image';

export default function Home() {
	const hardTopPaddleboards = PADDLEBOARDS.hardTop_PaddleBoards;
	const inflatablePaddleboards = PADDLEBOARDS.inflatable_paddleBoards;

	return (
		<div>
			<div className='grid justify-items-center'>
				<h1 className='text-center p-12'>Inflatable</h1>
				<div>
					{inflatablePaddleboards.map((paddleBoard) => (
						<li key={paddleBoard.id}>
							name: {paddleBoard.name}
							<Image
								src={paddleBoard.image.main}
								alt={`Image of ${paddleBoard.name}`}
								width={500}
								height={500}
							/>
						</li>
					))}
				</div>
			</div>
      <div className='grid justify-items-center'>
				<h1 className='text-center p-12'>Hard top</h1>
				<div>
					{hardTopPaddleboards.map((paddleBoard1) => (
						<li key={paddleBoard1.id} className="text-center">
							name: {paddleBoard1.name} 
							<Image
								src={paddleBoard1.image.main}
								alt={`Image of ${paddleBoard1.name}`}
								width={500}
								height={500}
							/>
						</li>
					))}
				</div>
			</div>
		</div>
	);
}

// Got all the images in the data and they are working by mapping
// make a git repository
// then use the isle website to figure out what components i need and pages
