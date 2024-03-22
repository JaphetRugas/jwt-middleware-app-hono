import { Context, Hono } from 'hono';
import { sign } from 'hono/jwt';
import { logger } from 'hono/logger'
import dashboard from '../routes/dashboard';
const app = new Hono(); 

app.use(logger())

app.post('/login', async (c: Context) => { 
    const payload = { sub: "username", role: 'admin' };
    const token = await sign(payload, process.env.JWT_SECRET as string);
    return c.json({ token }); 
});

app.route("/dashboard", dashboard) 

export default app
