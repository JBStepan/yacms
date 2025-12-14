import { MongoClient } from "mongodb";
import "dotenv/config"

const client = new MongoClient(process.env.DATABASE_URL!);

export const db = client.db();
export const mongoClient = client;