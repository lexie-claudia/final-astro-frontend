import React from 'react'
import LoginForm from './LoginForm'
import RegistarionFormnavBar from './RegistrationScreenComponents/RegistrationFormNavBar';

const LoginScreen = () => {
    return (
        <div>
            <RegistarionFormnavBar logo="Home"/>
            <LoginForm />
        </div>
    )
}

export default LoginScreen


