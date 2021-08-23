import React from 'react'

const Boxes = (props) => {
    return (
        <div>
            <section className="p-5">
                <div className="container">
                    <div className="row text-center g-4">

                        {
                            props.content.map(element => {
                                return (
                                    <div className="col-md">
                                        <div className={"card text-light bg-" + element.color}>
                                            <div className="card-body text-center">
                                                <div className="h1 mb-3">
                                                    <i className="bi bi-people"></i>
                                                </div>
                                                <h3 className="card-title mb-3">{element.header}</h3>
                                                <p className="card-text">
                                                    {element.title}
                                                </p>
                                                <a href="#" className="btn btn-primary">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Boxes
