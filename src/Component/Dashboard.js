import React from "react";
import New from "./New";

import { faHouse, faUser, faComment, faPeopleCarryBox, faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Dashboard({pData,data,Userdata,DelieveredOrders}) {

    
    return (
        <>
            {/* Main */}
            <main className="py-6 bg-surface-secondary">
                <div className="container-fluid">
                    {/* Card stats */}
                    <div className="row g-6 mb-6">
                        <New title="Total User" number={Userdata.length} img={<FontAwesomeIcon icon={faUser} />} />
                        <New title="Total Product" number={pData.length} img={<FontAwesomeIcon icon={faGift} />}/>
                        <New title="Delievered Orders" number={DelieveredOrders.length} img={<FontAwesomeIcon icon={faPeopleCarryBox} />}/>
                        <New title="Pending Orders" number={data.length} img={<FontAwesomeIcon icon={faPeopleCarryBox} />}/>
                    </div>
                    <div className="card shadow border-0 mb-7">
                        <div className="card-header">
                            <h5 className="mb-0">Chart</h5>
                        </div>
                        <div className="card-footer border-0 py-5">
                            <span className="text-muted text-sm">
                                Showing 10 items out of 250 results found
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Dashboard