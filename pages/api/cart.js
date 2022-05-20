const URL =
	'mongodb+srv://latz:68383441@paddleboards.dztrf.mongodb.net/PaddleBoardApp?retryWrites=true&w=majority';

import { MongoClient } from 'mongodb';

async function handler(req, res) {
	const client = await MongoClient.connect(URL);
	const cartItem = req.body.item;

	if (req.method === 'POST') {
		const db = client.db
		const document = await client.db().collection('myCart').insertOne({ cartItem });

		res.status(201).json({ message: document });
	}

	if (req.method === 'GET') {
		const db = client.db();

		const cartItems = await db.collection('myCart').find().toArray();

		res.status(200).json({ items: cartItems });
	}
	client.close;
}

export default handler;
