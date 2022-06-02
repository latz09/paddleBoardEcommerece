import {connectToDatabase} from '../../lib/mongodb'

async function handler(req, res) {

	if (req.method === 'GET') {
		const db = await connectToDatabase()

		const documents = await db.collection('accessories').find().toArray();

		res.status(200).json({ accessories: documents });
	}
	client.close();
}

export default handler;

