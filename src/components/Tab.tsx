import React from 'react'
import './style.less'
import { Button } from 'antd'
import { history } from 'umi'
import * as cookie from '@/utils/cookies'
const username = cookie.getCookie('username')
export default function Tab() {
    const quit = () => {
        history.push('/login')
        cookie.removeCookie('username')
        cookie.removeCookie('token')
        cookie.removeCookie('mobile')
        cookie.removeCookie('id')
        cookie.removeCookie('rid')
        cookie.removeCookie('email')
    }
    return (
        <div className="tab">
            <span>当前操作用户：{username || '🥷syukinmei'}</span>
            <Button type='primary' style={{ background: '#909399', borderColor: '#909399' }} onClick={quit}>退出</Button>
        </div>
    )
}