import jwt from 'jsonwebtoken'
import { jwtSecret } from '../config/auth'
import Koa from 'koa'

export const createToken = (payload: any) => {
  return jwt.sign(payload, jwtSecret, { expiresIn: '24h' })
}

export const addUserInfo = async (ctx: Koa.ParameterizedContext<Koa.DefaultState, Koa.DefaultContext, any>, next: Koa.Next) => {
  let token: any = null, request = ctx.request;
  if (request.header['authorization']) {
    token =  request.header['authorization'].replace('Bearer ', '') 
  }
  if(token) {
    let err: any =  await new Promise(resolve=>{
      jwt.verify(token, jwtSecret, (err: unknown, payload: any) =>{
          if(!err){
            //将token解码后的内容 添加到上下文
            ctx.state.global = payload
          }
          resolve(err)
      })
    })
    if(err){
      ctx.body = {
        msg: err.message === 'jwt expired' ? 'token 过期' : 'token 出错',
        err,
        code:0
      }
      return
    }
    await next()
  }
}
export  const checkJwt =  async (ctx: Koa.ParameterizedContext<Koa.DefaultState, Koa.DefaultContext, any>, next: Koa.Next) => {
  let token: any = null, request = ctx.request;
  if (request.header['authorization']) {
    token =  request.header['authorization'].replace('Bearer ', '') 
  }
  if(token) {
    let err: any =  await new Promise(resolve=>{
      jwt.verify(token, jwtSecret, (err: unknown, payload: any) =>{
          if(!err){
            //将token解码后的内容 添加到上下文
            ctx.state.global = payload
          }
          resolve(err)
      })
    })
    if(err){
      ctx.body = {
          msg: err.message === 'jwt expired' ? 'token 过期' : 'token 出错',
          err,
          code:0
      }
      return
    }
    await next()
  }
}
