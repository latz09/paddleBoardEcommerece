import NewsLetters from '../../../components/admin/newsLetters/NewsLetters';
import Navigation from '../../../components/admin/Navigation';

import connectToDatabase from '../../../lib/mongodb';

const UserNewsletters = ({ emails }) => {
	return (
		<div className='max-w-lg mx-auto'>
			<div className='my-8'>
				<Navigation />
			</div>
			<div>
				<NewsLetters emails={emails} />
			</div>
		</div>
	);
};

export default UserNewsletters;

export async function getServerSideProps() {
	const client = await connectToDatabase;
	const db = await client.db();
	const data = await db
		.collection('newsLetterSignups')
		.find()
		.sort({ _id: -1 })
		.toArray();

	return {
		props: { emails: JSON.parse(JSON.stringify(data)) },
	};
}
