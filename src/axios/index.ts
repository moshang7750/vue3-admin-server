import axios, { AxiosRequestConfig } from 'axios'

type PendItem = {
  u: string
  f: (val: string) => void
  [key: string]: any
}

const getTokens = () => {
  return 111
}

const baseURL = 'http://localhost:3000'
const pending: PendItem[] = [] // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
const CancelToken = axios.CancelToken
const removePending = (ever: AxiosRequestConfig) => {
  for (const p in pending) {
    if (pending[p].u === ever.url + '&' + ever.method) {
      // 当当前请求在数组中存在时执行函数体
      pending[p].f('cancel') // 执行取消操作
      pending.splice((p as unknown) as number, 1) // 把这条记录从数组中移除
    }
  }
}

const service = axios.create({
  baseURL: baseURL,
  timeout: 5000, // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  (config) => {
    // if (getToken()) {
    config.headers['name'] = getTokens() // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    removePending(config) // 在一个ajax发送前执行一下取消操作
    config.cancelToken = new CancelToken((c) => {
      // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
      pending.push({
        u:
          config.url +
          '&' +
          config.method +
          '&' +
          (Object.prototype.toString.call(config.params) === '[object FormData]'
            ? config.params
            : JSON.stringify(config.params)),
        f: c,
      })
    })
    return config
  },
  (error) => {
    // Do something with request error
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  (response) => {
    const code = response.status
    removePending(response.config)
    if (code < 200 || code > 300) {
      // Notification.error({
      //   title: response.message
      // })
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  (error) => {
    if (error.message === 'cancel') {
      return false
    }
    let code = 0
    try {
      code = error.response.data.status
    } catch (e) {
      if (error.toString().indexOf('Error: timeout') !== -1) {
        return Promise.reject(error)
      }
    }

    return Promise.reject(error)
  }
)
export default service
