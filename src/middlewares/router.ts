import * as Router from "@koa/router"
import { Context } from "koa"

type TController = (ctx: Context) => Promise<any>
type THttpType = "post" | "get" | "put" | "delete"

const router = new Router()

export const response = (
  type: THttpType,
  url: string,
  controller: TController
) => {
  router[type](url, async (ctx: Context) => {
    try {
      const data = await controller(ctx)
      ctx.status = 200
      ctx.body = {
        code: 200,
        msg: "请求成功",
        data,
        success: true,
      }
    } catch (err) {
      throw err
    }
  })
}

export const post = (url: string, controller: TController) =>
  response("post", url, controller)
export const get = (url: string, controller: TController) =>
  response("get", url, controller)
export const put = (url: string, controller: TController) =>
  response("put", url, controller)
export const deleteApi = (url: string, controller: TController) =>
  response("delete", url, controller)

let curData: any = ""
/** test */
get("/iot/test", async () => ({ connect: curData }))

post("/iot/post", async (ctx) => {
  curData = ctx.request.body
  console.log("curData", curData)
})

export { router }
