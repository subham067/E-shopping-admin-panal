import React from "react";
import { Link } from "react-router-dom";

function Action() {
    return (
        <>
            {/* Actions */}
            <div className="col-sm-6 col-12 text-sm-end">
                <div className="mx-n1">
                    <Link to="AddProduct" className="btn d-inline-flex btn-sm btn-primary mx-1">
                        <span className=" pe-2">
                            <i className="bi bi-plus" />
                        </span>
                        <span>Create</span>
                    </Link>
                </div>
            </div>
        </>
    );


}

export default Action