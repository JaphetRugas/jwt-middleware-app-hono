import { MiddlewareHandler, Next } from 'hono';
import { Context } from 'hono';
import { jwt, verify } from 'hono/jwt'; 

export async function jwtAuth(c: Context, next: Next) {
  const { authorization } = c.req.header()
  let token
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1]
      const decoded = await verify(token, process.env.JWT_SECRET as string)
      console.log(decoded)
      return next();
    } catch (error) {
      c.status(401)
      return c.json({ message: "Error handling token" })
    }
  }

  if (!token) {
    c.status(401)
    return c.json({ message: "Not Authorized" })
  }
}
 