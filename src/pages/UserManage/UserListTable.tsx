import React from 'react'
import { Table, Space, Pagination, Switch, Button, Popconfirm, } from 'antd';
import { EditOutlined, DeleteOutlined, SettingOutlined } from '@ant-design/icons'
import { connect, Dispatch } from 'umi'
import { Users } from './model'
interface P {
    total?: number
    users?: Users[] | undefined
    dispatch: Dispatch
}
const UserListTable = (props: P) => {
    const columns = [
        {
            title: '',
            width: 48,
            render(text: any, record: any, index: number) {
                return index + 1
            }
        },
        {
            title: '用户名',
            width: 213,
            dataIndex: 'username',
        },
        {
            title: '邮箱',
            width: 213,
            dataIndex: 'email',
        },
        {
            title: '电话',
            width: 213,
            dataIndex: 'mobile',
        },
        {
            title: '角色',
            width: 213,
            dataIndex: 'role_name',
        },
        {
            title: '状态',
            width: 213,
            render: (currentID: any) => <Switch
                onChange={(checked) => { ChangeState(checked, currentID) }}
                // checked
            />
        },
        {
            title: '操作',
            width: 180,
            render: (currentID: any) => <Space>
                <Button type='primary' icon={<EditOutlined />} onClick={Edit} />

                <Popconfirm
                    title="Are you sure to delete this user?"
                    onConfirm={() => { Delete(currentID) }}
                    // onCancel={cancel}
                    okText="确认"
                    cancelText="取消"
                >
                    <Button type='primary' danger icon={<DeleteOutlined />} ></Button>
                </Popconfirm>
                <Button type='primary' icon={<SettingOutlined />} onClick={Setting} style={{ background: 'orange', borderColor: 'orange' }} />
            </Space>
        }
    ];
    const ChangeState = (checked: boolean, { id }: { id: number }) => {
        console.log(checked, id)
        dispatch({
            type: 'user/changeState',
            parmas: {
                checked,
                id,
            }
        })
    }
    const Edit = () => {
        alert('Edit')
    }
    const Delete = ({ id }: { id: number }) => {
        dispatch({
            type: 'user/deleteUser',
            params: id
        })
    }
    const Setting = () => {
        alert('Setting')
    }
    const { users, total, dispatch } = props
    const onChange = (page: number | undefined, pageSize: number | undefined) => {
        dispatch({
            type: 'user/getUser',
            params: {
                query: '',
                pagenum: page,
                pagesize: pageSize
            }
        })
    }
    const onShowSizeChange = (current: number, size: number) => {
        dispatch({
            type: 'user/getUser',
            params: {
                query: '',
                pagenum: current,
                pagesize: size
            }
        })
    }
    return (
        <div>
            <Table columns={columns} dataSource={users} bordered pagination={false} style={{ paddingBottom: '20px' }} />

            <Pagination
                total={total}
                defaultCurrent={1}
                defaultPageSize={5}
                showSizeChanger
                showQuickJumper
                pageSizeOptions={['1', '2', '5', '10']}
                showTotal={total => `共 ${total} 条`}
                onChange={onChange}
                onShowSizeChange={onShowSizeChange}
            />
        </div>
    )
}
interface State {
    user: Users[] | null
}
export default connect((state: State) => state.user)(UserListTable)






