import { betterAuth } from "better-auth";
import { sveltekitCookies } from "better-auth/svelte-kit";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { getRequestEvent } from "$app/server";
import { db } from "$lib/server/db"

export const auth = betterAuth({
    database: mongodbAdapter(db),
    plugins: [sveltekitCookies(getRequestEvent)],
    emailAndPassword: { 
        enabled: true, 
    }, 
});