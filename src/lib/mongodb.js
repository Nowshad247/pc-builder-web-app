// lib/mongodb.js

import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};
let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In dev mode, use a global variable to prevent hot reload connection issues
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, don't use global
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

clientPromise.then(async (client) => {
  try {
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Pinged MongoDB — connection successful.");
  } catch (e) {
    console.error("❌ Ping failed:", e);
  }
});

export default clientPromise;
