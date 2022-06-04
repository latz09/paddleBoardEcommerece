import { connectToDatabase } from '../../lib/mongodb';

async function handler(req, res) {
	const db = await connectToDatabase();

	if (req.method === 'POST') {
		const userEmail = req.body.email;
		const date = req.body.date;

		if (!userEmail || !userEmail.includes('@')) {
			res.status(422).json({ message: 'Invalid email address.' });
			return;
		}

		await db
			.collection('newsLetterSignups')
			.insertOne({ email: userEmail, date });

		res.status(201).json({ message: 'New email inserted' });
	}
}

export default handler;
