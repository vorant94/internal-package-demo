import { helloWorld } from 'common'
import { Hono } from 'hono'

const app = new Hono()


app.get('/', (c) => {

  helloWorld();

  return c.render(<h1>Hello!</h1>)
})

export default app
