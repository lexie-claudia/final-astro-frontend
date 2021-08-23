import React from 'react'
import { Link } from 'react-router-dom'

const RegistrationFormNavBar = (props) => {
    const style = {
        'color':'inherit', 
        'textDecoration':'none'
    }
    return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">
                        <Link style={style} to='/'>
                            {props.logo}
                        </Link>
                    </span>
                    <div className='d-flex'>
                    <Link className="btn btn-primary mx-1" to='/'>Home</Link>                    
                </div>
            </div>
        </nav>        
    )
}

export default RegistrationFormNavBar
