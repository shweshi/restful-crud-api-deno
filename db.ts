import { MongoClient } from "https://deno.land/x/mongo@v0.21.2/mod.ts";

const client = new MongoClient();
await client.connect("mongodb://localhost:27017");

// Defining schema interface
interface UserSchema {
    _id: { $oid: string };
    name: string;
    email: string;
}

const db = client.database("restful_api_deno");

const User = db.collection<UserSchema>("users");

export { User };