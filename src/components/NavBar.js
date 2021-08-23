import React from 'react'
import Button from './Button';
import { Link as ReactLink } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
                <div class="container">
                    <a href='' class="navbar-brand" style={{'fontSize':'25px'}}>{props.title}</a>

                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navmenu"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navmenu">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <ReactLink to='/login' 
                                style={{'color':'inherit', 'textDecoration':'none'}}>
                                <Button classColor='btn-success' width='80px'>Login</Button>
                                </ReactLink>
                            </li>
                            <li class="nav-item">
                                <ReactLink to='/register' 
                                style={{'color':'inherit', 'textDecoration':'none'}}>
                                <Button classColor='btn-danger' width='100px'>Sign Up</Button>
                                </ReactLink>
                            </li>                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
