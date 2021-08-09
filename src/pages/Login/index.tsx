import React from 'react'
import './style.less'
import LoginForm from './LoginForm'
export default function Login() {
    return (
        <div className='login-container'>
            <div className='login-title'>
                <div className='title-box'>
                    <p>s y u k i n m e i</p>
                    <span>Welcome To U</span>
                </div>
            </div>
            <div className='login-content'>
                <div className='login-form'>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}