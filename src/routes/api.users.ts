import { db } from "../data/drizzle-connection";
import { usersTable } from "../data/drizzle.schema";
import { createServerFileRoute } from '@tanstack/react-start/server'

export const ServerRoute = createServerFileRoute('/api/users').methods({
  GET: async (req) => {
    // console.log('API get-users called', req);
    const users = await db.select().from(usersTable).all();
    console.log('users from db:', users);
    return new Response(JSON.stringify(users), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
}
})
