import React from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
export default function () {
    return (
        <div>
            <Breadcrumb separator=">">
                <Breadcrumb.Item>
                    <Link to='/Welcome'>首页</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                <Breadcrumb.Item>用户列表</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}