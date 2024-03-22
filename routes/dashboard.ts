import { Hono } from 'hono'  
import { jwtAuth } from '../src/middleware'

const dashboard = new Hono()

dashboard.get('/',  jwtAuth, (c) => c.text('List Books')) 
dashboard.get('/:id', jwtAuth, (c) => {
  const id = c.req.param('id')
  return c.text('Get Book: ' + id)
})
dashboard.post('/', jwtAuth, (c) => c.text('Create Book')) 

export default dashboard