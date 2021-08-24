import React from 'react'

const LearnSection = () => {
    return (
        <div>
            <section id="learn" className="p-5 bg-dark text-light">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md p-5">
                            <h2>Learn Something New</h2>
                            <br/>
                            <p className="lead" style={{'textAlign':'left', 'position':'relative'}}>
                                To give you the best chance to jump start your career and build experience, 
                                we have specially chosen courses and built parneships 
                                so you can improve your skills and get ahead!
                            </p>
                            <p style={{'textAlign':'left', 'position':'relative'}}>
                                
                            </p>
                            <a href="#" className="btn btn-danger mt-3">
                                <i className="bi bi-chevron-right"></i> Read More
                            </a>
                        </div>
                        <div className="col-md">
                            <img src="./learnQuote.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LearnSection
