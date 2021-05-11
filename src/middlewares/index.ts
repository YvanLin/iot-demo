import * as bodyParser from 'koa-bodyparser'
import * as cors from 'koa2-cors'

export const koaMiddleware = (app: any) => {
  app.use(cors({}))
  app.use(bodyParser())
}
