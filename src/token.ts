import { sign } from 'hono/jwt'

const secret = 'mySecretKey'
const payload = {
    sub: 'user123',
    role: 'admin',
}

sign(payload, secret)
    .then((token) => {
        console.log('Generated token:', token)
    })
    .catch((error) => {
        console.error('Error generating token:', error)
    })