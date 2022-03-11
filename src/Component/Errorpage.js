import React from "react";

function Errorpage(){
    return(
        <>
            {/* Main */}
            <main className="py-6 bg-surface-secondary">
                <div className="container-fluid">
                    <div className="col-xl-12 col-sm-12 col-12">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <h1 style={{color:"Red",textAlign:"center"}}>404 Page Not Found</h1>
                                <br />
                                <h3 style={{color:"black",textAlign:"center"}}>Error Page</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Errorpage