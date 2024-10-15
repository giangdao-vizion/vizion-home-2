const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://vizionuser:Am5_67Wv2wPD66-@cluster0.axd9r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "PlatformStaging";

let db;

async function connectToDatabase() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
    db = client.db(dbName);
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
    process.exit(1);
  }
}

function getDb() {
  return db;
}

module.exports = { connectToDatabase, getDb };