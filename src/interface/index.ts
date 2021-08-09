// 登录请求的入参数据类型
export interface LoginParams {
    username: string
    password: string
}

// 请求用户列表的入参类型
export interface GetUserParams {
    query: string
    pagenum: number
    pagesize: number
}

// 添加用户请求的入参类型
export interface AddUserParams {
    username: string
    password: string
    email: string
    mobile: string
}

// 删除单个用户请求的入参类型
export interface DELETEUserParams {
    id: number
}