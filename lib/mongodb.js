import { MongoClient } from 'mongodb';

//.env.local >>
// MONGODB_URI= mongodb+srv://latz:68383441@paddleboards.dztrf.mongodb.net/PaddleBoardApp?retryWrites=true&w=majority
// MONGO_DB= PaddleBoardApp
// DEV_URL = 'http://localhost:3000' 
//.env.local

// export async function connectToDatabase() {
// 	const client = await MongoClient.connect(process.env.MONGODB_URI);
// 	const db = client.db();
// 	return db;
// }



const uri = process.env.MONGODB_URI
const options = {}

let client
let connectToDatabase

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  connectToDatabase = global._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  connectToDatabase = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default connectToDatabase