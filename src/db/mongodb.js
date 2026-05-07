const { config } = require('dotenv')
const contactModel = require('../model/contact')
config()

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let db;

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("cse341").command({ ping: 1 });
        db = await client.db('cse341')
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (err) {
        // Ensures that the client will close when you finish/error
        console.log('then close')
        await client.close();
    }
}

async function getDb() {
    if (!db) throw new Error('DB not initialized. Call connectDB() first.');
    return db;
}

async function dbContacts() {
    if (!db) throw new Error('DB not initialized. Call connectDB() first.');
    return db.collection('contacts');
}

module.exports = { run, getDb, dbContacts };
