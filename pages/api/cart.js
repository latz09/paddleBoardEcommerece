// ============ API/CART.JS
import { v4 as uuid } from 'uuid';

const URL =
	'mongodb+srv://latz:68383441@paddleboards.dztrf.mongodb.net/PaddleBoardApp?retryWrites=true&w=majority';

import { MongoClient, ObjectId } from 'mongodb';

async function handler(req, res) {
	const client = await MongoClient.connect(process.env.MONGODB_URI);
	// const cartItem = req.body.item;
	// const itemId = req.body.id;

	if (req.method === 'POST') {
		const { item } = req.body;
		const insertItem = await client
			.db()
			.collection('myCart')
			.insertOne({ _id: item._id, item });

	
		res.status(200).json()
		client.close();
	}

	if (req.method === 'GET') {
		const db = client.db();

		const cartItems = await db.collection('myCart').find().toArray();

		res.status(200).json({ items: cartItems });
		client.close()
	}

	if (req.method === 'DELETE') {
		const { itemId } = req.body;
		
		await client
			.db()
			.collection('myCart')
			.deleteOne({_id: itemId });

		res.status(200).json({ message: 'deleted' });
	}

	client.close;
}

export default handler;
