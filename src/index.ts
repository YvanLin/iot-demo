  
import 'module-alias/register'
import * as Koa from 'koa'
import { koaMiddleware } from './middlewares'
import { router } from './middlewares/router'

const app = new Koa()
koaMiddleware(app)

app.use(router.routes())
app.listen(3000)