import { MongoClient } from 'mongodb';
const URL =
	'mongodb+srv://latz:68383441@paddleboards.dztrf.mongodb.net/PaddleBoardApp?retryWrites=true&w=majority';


async function handler(req, res) {
	const client = await MongoClient.connect(URL);

	if (req.method === 'GET') {
		const db = client.db();

		const documents = await db.collection('PaddleBoards').find().toArray();
		res.status(200).json({ paddleBoards: documents });
	}

	client.close();
}

export default handler;
