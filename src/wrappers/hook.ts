import { useState, useEffect } from 'react'
import * as cookie from '@/utils/cookies'
export const useAuth = () => {
    const [isLogin,setIsLogin] = useState(false)
    useEffect(()=>{
        const username=cookie.getCookie('username')
        if(username==='admin'){
            console.log(username,true)
             setIsLogin(true)
        }
    },[])
    return {isLogin}
}