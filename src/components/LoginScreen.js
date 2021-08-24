import React from 'react'
import LoginForm from './LoginForm'
import RegistarionFormnavBar from './RegistrationScreenComponents/RegistrationFormNavBar';

const LoginScreen = () => {
    return (
        <div>
            <RegistarionFormnavBar logo="Login Page"/>
            <LoginForm />
        </div>
    )
}


export default LoginScreen


