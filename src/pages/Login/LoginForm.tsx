import React from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect, Dispatch } from 'umi'
import { LoginParams } from '@/interface'
interface LoginFrom {
    dispatch: Dispatch
}
const LoginFrom = (props: LoginFrom) => {
    const onFinish = (values: LoginParams) => {
        console.log('Received values of form: ', values);
        // 组件中通过dispatch来激活model.ts中的effects中的getLogin
        props.dispatch({
            type: 'login/getLogin', // 用于找effects中的方法   数据块名称/effects中的方法名
            params: values
        })
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                        // pattern: /^[a-zA-Z0-9_-]{4,16}$/ //添加正则验证
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
            </Form.Item>
        </Form>
    );
};

export default connect()(LoginFrom)