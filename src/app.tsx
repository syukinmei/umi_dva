// 创建了layout组件
import React from 'react'
import Tab from '@/components/Tab'
import Footer from '@/components/Footer'
import { history } from 'umi'
import * as cookie from '@/utils/cookies'
export const layout = () => {
    return {
        rightContentRender: () => <Tab />,
        footerRender: () => <Footer />,
        onPageChange: () => {
            const { location: { pathname } } = history
            const token = cookie.getCookie('token')
            if (!token && pathname !== '/login') {
                // 判断是否有token且不是在登录页面
                history.push('/login')
            }
        }
    }
}