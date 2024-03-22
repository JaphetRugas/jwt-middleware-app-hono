import { Next, Context } from 'hono';
import { verify, decode } from 'hono/jwt';

export async function jwtAuth(c: Context, next: Next) {
  const { authorization } = c.req.header()
  console.log(authorization)

  const token = authorization.split(" ")[1];

  if (!token) {
    c.status(401)
    return c.json({ message: "Token missing" })
  }

  if (authorization && authorization.startsWith("Bearer")) {
    console.log("Token:", token);
    console.log("Secret: ", process.env.JWT_SECRET as string)
    const decoded = await verify(token, process.env.JWT_SECRET as string);
    console.log("Decoded Token:", decoded);

    const { header, payload } = decode(token);
    console.log('Decoded Header:', header);
    console.log('Decoded Payload:', payload);

    return next();
  }
} 