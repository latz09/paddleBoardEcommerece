import connectToDatabase from '../../lib/mongodb';

async function handler(req, res) {
	const client = await connectToDatabase;
	const db = await client.db();

	if (req.method === 'POST') {
		const { item } = req.body;
		await db.collection('myCart').insertOne({ _id: item._id, item });

		res.status(200).json({});
	}

	if (req.method === 'GET') {
		await db.collection('myCart').find().toArray();

		res.status(200).json({ items: cartItems });
	}

	if (req.method === 'DELETE') {
		const { itemId } = req.body;

		await db.collection('myCart').deleteOne({ _id: itemId });

		res.status(200).json({ message: 'deleted' });
	}
}

export default handler;
