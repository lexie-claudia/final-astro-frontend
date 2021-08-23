import React from 'react'

const LearnSection = () => {
    return (
        <div>
            <section id="learn" className="p-5 bg-dark text-light">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md p-5">
                            <h2>Learn React</h2>
                            <br/>
                            <p className="lead" style={{'textAlign':'left', 'position':'relative'}}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Similique deleniti possimus magnam corporis ratione facere!
                            </p>
                            <p style={{'textAlign':'left', 'position':'relative'}}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                                reiciendis eius autem eveniet mollitia, at asperiores suscipit
                                quae similique laboriosam iste minus placeat odit velit quos,
                                nulla architecto amet voluptates?
                            </p>
                            <a href="#" className="btn btn-danger mt-3">
                                <i className="bi bi-chevron-right"></i> Read More
                            </a>
                        </div>
                        <div className="col-md">
                            <img src="./img/react.svg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LearnSection
