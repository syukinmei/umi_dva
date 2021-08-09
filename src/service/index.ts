// 文件用于封装数据请求
import request from '@/utils/request'
import { LoginParams, GetUserParams, AddUserParams, DELETEUserParams } from '@/interface'


// 登录的请求
export const loginService = (params: LoginParams) => request({
    url: 'login',
    method: 'POST',
    data: params
})

// 获得用户列表请求
export const getUserService = (params: GetUserParams) => request({
    url: 'users',
    data: params,
})

// 添加用户的请求
export const addUserService = (params: AddUserParams) => request({
    url: 'users',
    method: 'POST',
    data: params
})

// 删除单个用户的请求
export const deleteUserService = (id: DELETEUserParams) => request({
    url: `users/${id}`,
    method: 'DELETE',
})

// 修改用户状态的请求
export const changeStateService = (uId:number, type:boolean) => request({
    url: `users/${uId}/state/${type}`,
    method:'PUT',
})