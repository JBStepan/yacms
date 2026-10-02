import { MongoClient, type Db, type Collection, type Document } from "mongodb";

const URI = process.env.MONGODB_URI

if (!URI) {
  throw new Error("Missing MONGODB_URI environment variable");
}

const globalForMongo = globalThis as unknown as { _mongoClient?: MongoClient };

const client: MongoClient =
  globalForMongo._mongoClient ?? new MongoClient(URI, { maxPoolSize: 10 });
 
if (process.env.NODE_ENV !== "production") {
  globalForMongo._mongoClient = client;
}

export const db: Db = client.db();

export function getDb(): Db {
  return client.db();
}

export function getCollection<T extends Document = Document>(name: string): Collection<T> {
  return db.collection<T>(name)
}