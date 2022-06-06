import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;

export async function connectToDatabase() {
	const client = await MongoClient.connect(MONGODB_URI);
	const db = client.db();
	return db;
}
