import { Effect, Reducer } from 'umi'
import * as service from '@/service'
import { message } from 'antd'
export interface Users {
    "id": number,
    "username": string,
    "mobile": string,
    "type": number,
    "email": string,
    "create_time": string,
    "mg_state": boolean,
    "role_name": string
}
interface UserState {
    users: Users[] | null
    pagenum: number
    totalpage: number
    error: boolean
}
interface UserModel {
    namespace: string
    state: UserState
    effects: {
        getUser: Effect
        addUser: Effect
        deleteUser: Effect
        changeState:Effect
    }
    reducers: {
        GET_USER: Reducer
        ADD_USER: Reducer
        DELETE_USER: Reducer
    }
}
const userModel: UserModel = {
    namespace: 'user',
    state: {
        users: null,
        pagenum: 1,
        totalpage: 10,
        error: false
    },
    effects: {
        *getUser({ params }, { call, put }) {
            const { data: { data, meta: { msg, status } } } = yield call(service.getUserService, params)
            if (status === 400) {
                message.error(msg)
                return
            }
            if (status === 404) {
                yield put({
                    type: 'GET_USER',
                    payload: {
                        error: true,
                        status
                    }
                })
                return
            }
            // 将请求的结果发送给reducers
            yield put({
                type: 'GET_USER', // type就是reducers中的方法名
                payload: data
            })
        },
        *addUser({ params }, { call, put }) {
            const result = yield call(service.addUserService, params)
        },
        *deleteUser({ params }, { call, put }) {
            const { data: { data, meta: { msg, status } } } = yield call(service.deleteUserService, params)
            if (status === 400) {
                message.error(msg)
                return
            }
            if (status === 200) {
                message.success(msg)
                yield put({
                    type: 'DELETE_USER',
                    payload: {
                        params
                    }
                })
                return
            }
        },
        *changeState({parmas:{id,checked}},{call,put}){ // 未完成～～～
            console.log(id,checked)
            const result=yield call(service.changeStateService,id,checked)
            console.log(result.data.data.mg_state)
        }

    },
    reducers: {
        GET_USER(state, action) { // state是state，action是put发送过来的对象
            return {
                ...state,
                ...action.payload
            }
        },
        ADD_USER() {
            return
        },
        DELETE_USER(state, { payload }) {
            return {
                ...state,
                users: [...state.users].filter((item) => item.id !== payload.params)
            }
        },
    }
}
export default userModel