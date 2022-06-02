import { MongoClient } from 'mongodb';


async function handler(req, res) {
	const client = await MongoClient.connect(process.env.MONGODB_URI);
	const newBoard = req.body.newBoard;

	if (req.method === 'GET') {
		const db = client.db();

		const documents = await db.collection('PaddleBoards').find().toArray();
		res.status(200).json({ paddleBoards: documents });
	}

	if (req.method === 'POST') {
		const db = client.db();

		const documents = await db
			.collection('PaddleBoards')
			.insertOne({ newBoard });
	}

	client.close();
}

export default handler;
