import React, { useEffect, useState } from "react";
// import New from "./New";
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { analytics, auth } from '../Config'

function User({Userdata}) {
    return (
        <>
            {/* Main */}
            <main className="py-6 bg-surface-secondary">
                <div className="container-fluid">
                    <div className="col-xl-12 col-sm-12 col-12">
                        <div className="card shadow border-0">
                            <div className="card-header">
                                <h5 className="mb-0 text-center font-weight-bold text-danger">Users Details Page</h5>
                            </div>

                            <div className="card-body">
                                <table cellPadding={1} cellSpacing={1} >
                                    <tbody>
                                        <tr>
                                            <th>Sl. No.</th>
                                            <th>User Name</th>
                                            {/* <th>Email Id</th> */}
                                            <th>Phone</th>
                                        </tr>
                                        {
                                            Userdata.map((items,i) =>
                                                <tr>
                                                    {/* <th>{items.id.substring(0, 2)}</th> */}
                                                    <th>{i +1}</th>
                                                    <th className="text-capitalize">{items.UserName}</th>
                                                    {/* <th>{items.UserEmail}</th> */}
                                                    <th>{items.UserMobile}</th>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default User