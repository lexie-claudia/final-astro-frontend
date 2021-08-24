// showcase is everything under the navbar on our homepage plus the images/ button
import React from 'react'
import { Link } from 'react-router-dom'

const ShowCase = (props) => {
    return (
        <div>
            <section
                className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start"
            >
                <div className="container">
                    <div className="d-sm-flex align-items-center justify-content-between">
                        <div>
                            <h1>LAND YOUR <span className="text-warning"> FIRST INTERNSHIP </span></h1>
                            <p className="lead my-4">
                                {props.desc1}
                            </p>
                            <Link
                                className="btn btn-primary btn-lg"
                                data-bs-toggle="modal"
                                data-bs-target="#enroll"
                                to='/review'
                            >
                                {props.button}
                            </Link>
                        </div>
                        <img
                            className="img-fluid w-50 d-none d-sm-block"
                            src="./img/showcase.svg"                            
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ShowCase
