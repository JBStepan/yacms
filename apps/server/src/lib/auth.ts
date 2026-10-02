import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { admin } from "better-auth/plugins"
import { apiKey } from "@better-auth/api-key"

import { db } from "./db";

export const auth = betterAuth({
    database: mongodbAdapter(db),
    emailAndPassword: {
        enabled: true
    },
    plugins: [
        admin(),
        apiKey()
    ]
})