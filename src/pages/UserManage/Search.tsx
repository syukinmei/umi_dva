import React from 'react';
import { Input, Button, Row, Col, Modal, Form } from 'antd';
import { connect, Dispatch } from 'umi'
import { AddUserParams } from '@/interface'
const { Search } = Input;
interface SearchBoxProps {
    dispatch: Dispatch
}
const SearchBox = (props: SearchBoxProps) => {

    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [buttonLoading, setbuttonLoading] = React.useState(false);
    const onFinish = (val: AddUserParams) => {
        setbuttonLoading(true)
        console.log(val)
        setConfirmLoading(true);
        props.dispatch({
            type: 'user/addUser',
            params: val
        })
        setTimeout(() => {
            setbuttonLoading(false)
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    }

    const handleCancel = () => {
        setVisible(false);
    };

    const onSearch = (value: any) => {
        props.dispatch({
            type: 'user/getUser',
            params: {
                query: value,
                pagenum: 1,
                pagesize: 5,
            }
        })
    }
    const addUser = () => {
        setVisible(true);
    }
    return (
        <div className='Search' style={{ marginBottom: '30px' }}>
            <Row gutter={20}>
                <Col>
                    <Search placeholder="input search text" onSearch={onSearch} enterButton />
                </Col>
                <Col>
                    <Button type='primary' onClick={addUser}>添加用户</Button>
                    <Modal
                        title="添加用户"
                        visible={visible}
                        confirmLoading={confirmLoading}
                        footer={null}
                    >
                        <p>吴海峰是猪啊</p>
                        <Form
                            labelCol={{ span: 3 }}
                            wrapperCol={{ span: 20 }}
                            onFinish={onFinish}
                        >
                            <Form.Item label="用户名" rules={[{ required: true }]} name="username">
                                <Input placeholder="please enter username" />
                            </Form.Item>
                            <Form.Item label="密码" rules={[{ required: true }]} name="password">
                                <Input.Password placeholder="please enter password" />
                            </Form.Item>
                            <Form.Item label="邮箱" rules={[{ required: true }]} name="email">
                                <Input placeholder="please enter email" />
                            </Form.Item>
                            <Form.Item label="电话" rules={[{ required: true }]} name="mobile">
                                <Input placeholder="please enter phone" />
                            </Form.Item>
                            <Form.Item>
                                <Row>
                                    <Col push={19}>
                                        <Button onClick={handleCancel}>取消</Button> &nbsp;&nbsp;
                                        <Button type="primary" htmlType="submit" loading={buttonLoading}>确定</Button>
                                    </Col>
                                </Row>
                            </Form.Item>
                        </Form>
                    </Modal>
                </Col>
            </Row>

        </div>
    )
}
export default connect()(SearchBox)