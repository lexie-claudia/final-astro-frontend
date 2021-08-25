import React from 'react'
import LoginForm from './LoginForm'
import RegistarionFormnavBar from './RegistrationScreenComponents/RegistrationFormNavBar';
import Footer from './Footer';


const LoginScreen = () => {
    return (
        <div>
            <RegistarionFormnavBar logo="Login Page"/>
            <LoginForm />
            <Footer/>
        </div>
    )
}


export default LoginScreen


