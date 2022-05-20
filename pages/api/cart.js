const URL =
	'mongodb+srv://latz:68383441@paddleboards.dztrf.mongodb.net/PaddleBoardApp?retryWrites=true&w=majority';

import { MongoClient } from 'mongodb';

async function handler(req, res) {
	const cartItem = req.body.item;

	if (req.method === 'POST') {
		const client = await MongoClient.connect(URL);
		const db = client.db().collection('myCart').insertOne({ item: cartItem });

		res.status(201).json({ message: 'New item inserted to cart' });
	}
}

export default handler;
