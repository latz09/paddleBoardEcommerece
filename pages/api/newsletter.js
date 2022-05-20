const URL =
	'mongodb+srv://latz:68383441@paddleboards.dztrf.mongodb.net/PaddleBoardApp?retryWrites=true&w=majority';

import { MongoClient } from 'mongodb';

async function handler(req, res) {
    const client = await MongoClient.connect(URL);

	if (req.method === 'POST') {
		const userEmail = req.body.email;

		if (!userEmail || !userEmail.includes('@')) {
			res.status(422).json({ message: 'Invalid email address.' });
			return;
		}

        const db = client.db();
        await db.collection('newsLetterSignups').insertOne({email: userEmail})

        
        res.status(201).json({message: 'New email inserted'})
	}
}

export default handler;
