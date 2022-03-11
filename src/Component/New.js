import React from 'react'

function New(props) {
    return (
        <>
            <div className="col-xl-3 col-sm-6 col-12">
                <div className="card shadow border-0">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <span className="h6 font-semibold text-muted text-lg d-block mb-2">
                                    {props.title}
                                </span>
                                <span className="h3 font-bold mb-0">{props.number}</span>
                            </div>
                            <div className="col-auto">
                                <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                                    {/* <i className="bi bi-clock-history" /> */}
                                    {props.img}
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                            <span className="badge badge-pill me-2">
                                <i className="bi bi-arrow-down me-1" />
                                
                            </span>
                            <span className="text-nowrap text-xs text-muted">
                                
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default New