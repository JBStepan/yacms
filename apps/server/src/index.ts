import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { auth } from './lib/auth';

const app = new Hono();
const adminDir = process.env.ADMIN_DIR ?? '../admin/build';

app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw))
app.get('/api', (c) => c.text("Hello World!"))
// app.use('/*', serveStatic({ root: adminDir }));
// app.get('/*', serveStatic({ path: `${adminDir}/index.html` }));

serve({ fetch: app.fetch, port: Number(process.env.PORT ?? 80)});