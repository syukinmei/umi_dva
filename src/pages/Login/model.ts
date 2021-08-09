import * as service from '@/service'
import { Effect, Reducer, history } from 'umi'
import { message } from 'antd'
import * as cookie from '@/utils/cookies'
interface LoginModel {
    namespace: string
    state: {}
    effects: {
        getLogin: Effect,
    }
    reducers: {
        LOGIN: Reducer
    }
}
const loginModel: LoginModel = {
    namespace: 'login', // 命名空间，数据块名称
    state: {}, // 数据
    effects: { //effects就是actions
        *getLogin({ params }, { call, put }) {
            // 这里是进行登录的请求，是generator函数
            const { data: { data, meta: { status, msg } } } = yield call(service.loginService, params)

            // 处理登录成功失败情况
            if (status === 400) {
                message.error(msg)
            }
            if (status === 200) {
                cookie.setCookie('email', data.email, 7)
                cookie.setCookie('id', data.id, 7)
                cookie.setCookie('mobile', data.mobile, 7)
                cookie.setCookie('rid', data.rid, 7)
                cookie.setCookie('token', data.token, 7)
                cookie.setCookie('username', data.username, 7)
                history.push('/welcome')
            }
        }
    },
    reducers: {
        LOGIN(state, action) { // reducers用于修改数据
            return
        }
    },
}

export default loginModel