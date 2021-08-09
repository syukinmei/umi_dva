import React from 'react'
import Breadcrumb from './Breadcrumb'
import SearchBox from './Search'
import UserListTable from './UserListTable'
import './style.less'
import { Empty } from 'antd'
import { connect } from 'react-redux' // ???? umi
import { Dispatch } from 'umi'
import { useAxiosUser } from './hook'
import { Users } from './model'
interface P {
    dispatch: Dispatch
    users: Users[] | null
    error: boolean
    pagenum: number
    totalpage: number
}
function UserManage(props: P) {
    //  请求写在自定义hook中 在组件中直接调用发送dispatch
    useAxiosUser(props.dispatch, {
        query: '',
        pagenum: 1,
        pagesize: 5,
    })
    const { users, error } = props
    return (
        <div className='UserManageBox'>
            <Breadcrumb />
            <div className='UserFormBox'>
                {error || <SearchBox />}
                {
                    error ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'请求出错'} /> : <UserListTable />
                    // users ? (<UserListTable data={users} />) : (<UserListTable data={[]} />)
                }
            </div>
        </div>
    )
}
interface State {
    user: Users[] | null
}
export default connect((state: State) => state.user)(UserManage)