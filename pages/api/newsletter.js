

import { MongoClient } from 'mongodb';

async function handler(req, res) {
    const client = await MongoClient.connect(process.env.MONGODB_URI);

	if (req.method === 'POST') {
		const userEmail = req.body.email;
		const date = req.body.date

		if (!userEmail || !userEmail.includes('@')) {
			res.status(422).json({ message: 'Invalid email address.' });
			return;
		}

        const db = client.db();
        await db.collection('newsLetterSignups').insertOne({email: userEmail, date})

        
        res.status(201).json({message: 'New email inserted'})
	}
}

export default handler;
