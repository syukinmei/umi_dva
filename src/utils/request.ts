//todo 封装数据请求
import axios from 'axios'
import qs from 'qs'
import * as cookie from './cookies'
//todo 创建axios自定义实例
const ins = axios.create({
  timeout: 20000,
  baseURL: 'http://59.110.226.77:5000/api/private/v1/'
})
//todo 创建axios拦截器
ins.interceptors.request.use(
  (config) => {
    //todo 携带token
    config.headers.common['Authorization'] = cookie.getCookie('token')
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
//todo 封装request函数
interface Options {
  url: string
  method?: string
  data?: any
  type?: string //用于区别我是post请求的那种方式
}
export default function request(options: Options) {
  const { url, method = 'get', data = {}, type = 'form' } = options
  switch (method.toUpperCase()) {
    case 'GET':
      return ins.get(url, { params: data })
    case 'POST':
      if (type === 'json') {
        //json提交
        return ins.post(url, data)
      }
      if (type === 'file') {
        //文件提交
        const p = new FormData()
        for (const key in data) {
          p.append(key, data[key])
        }
        return ins.post(url, p)
      }
      // 进行表单提交  必须转参数【qs】
      return ins.post(url, qs.stringify(data))
    case 'PUT':
      return ins.put(url, data)
    case 'DELETE':
      return ins.delete(url, { data })
    default:
      return ins.get(url, { params: data })
  }
}
