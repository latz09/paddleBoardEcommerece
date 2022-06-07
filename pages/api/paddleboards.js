import  connectToDatabase  from '../../lib/mongodb';

async function handler(req, res) {
	const client = await connectToDatabase;
	const db = await client.db();


	if (req.method === 'GET') {
		const documents = await db.collection('PaddleBoards').find().toArray();
		res.status(200).json({ paddleBoards: documents });
	}

	if (req.method === 'POST') {
		const documents = await db
			.collection('PaddleBoards')
			.insertOne({ newBoard });
	}

	client.close();
}

export default handler;
