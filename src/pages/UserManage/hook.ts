// 获取用户列表的自定义hook
import { useEffect } from 'react'
import { Dispatch } from 'umi'
import {GetUserParams} from '@/interface'
export const useAxiosUser = (dispatch:Dispatch,params:GetUserParams) => {
    useEffect(() => {
        dispatch({
            type: 'user/getUser',
            params
        })
    }, [])
}

// 去组件中执行这个自定义hook