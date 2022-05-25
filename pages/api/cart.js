
const URL =
'mongodb+srv://latz:68383441@paddleboards.dztrf.mongodb.net/PaddleBoardApp?retryWrites=true&w=majority';

import { MongoClient } from 'mongodb';

async function handler(req, res) {
const client = await MongoClient.connect(URL);
const cartItem = req.body.item;
const itemId = req.body.id

if (req.method === 'POST') {
	const db = client.db
	const document = await client.db().collection('myCart').insertOne({_id: cartItem._id, cartItem });

	res.status(201).json({ message: 'Item added to cart' });
}

if (req.method === 'GET') {
	const db = client.db();

	const cartItems = await db.collection('myCart').find().toArray();

	res.status(200).json({ items: cartItems });
}

if (req.method === 'DELETE') {
	const db = client.db()

	const documentToDelete = await client.db().collection('myCart').deleteOne({_id: itemId})

	res.status(200).json({message: 'deleted'})
}

client.close;
}

export default handler;