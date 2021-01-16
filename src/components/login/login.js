import React, { Component } from 'react'

import loginStyle from './login.module.scss'

import FormInput from '../form-input/form-input'
import FormButton from '../form-button/form-button'

import { signInWithGoogle } from '../../firebase/utils'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render() {
       
        return (
            <div className={loginStyle.id}>
                <h1>Login</h1>
    
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <FormButton type='submit'> Sign in </FormButton>
                    <FormButton onClick={ signInWithGoogle }> Sign in with Google </FormButton>
                </form>
            </div>
        )
    }
}

export default Login

