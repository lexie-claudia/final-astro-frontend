// showcase is everything under the navbar on our homepage plus the images/ button
import React from 'react'

const ShowCase = (props) => {
    return (
        <div>
            <section
                className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start"
            >
                <div className="container">
                    <div className="d-sm-flex align-items-center justify-content-between">
                        <div>
                            <h1>Become a <span className="text-warning"> Web Developer </span></h1>
                            <p className="lead my-4">
                                {props.desc1}
                            </p>
                            <button
                                className="btn btn-primary btn-lg"
                                data-bs-toggle="modal"
                                data-bs-target="#enroll"
                            >
                                {props.button}
                            </button>
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
