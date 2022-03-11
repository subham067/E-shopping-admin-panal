import React, { useEffect, useState } from "react";
// get our fontawesome imports
import { faHouse, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { analytics, auth } from '../Config'
import { Link } from "react-router-dom";

function Order({data}) {
    return (
        <>
            {/* Main */}
            <main className="py-6 bg-surface-secondary">
                <div className="container-fluid">
                    <div className="col-xl-12 col-sm-12 col-12">
                        <div className="card shadow border-0">
                            <div className="card-header">
                                <h5 className="mb-0 text-center font-weight-bold text-danger">Pending Orders Details Page</h5>
                            </div>
                            <div className="card-body">
                                <table cellPadding={1} cellSpacing={1} >
                                    <tbody>
                                        <tr>
                                            <th>Sl. No.</th>
                                            <th>Product Name</th>
                                            <th>No. of Product</th>
                                            <th>Price</th>
                                            <th>Order Date</th>
                                            <th>Details</th>
                                        </tr>
                                        {
                                            data.map((items, i) => {
                                                // let text = d.toDate()
                                                // const d = items.OrderDate;
                                                return (                                                    
                                                    <tr>
                                                        <th>{i + 1}</th>
                                                        
                                                        <th>{items.productName.split(' ')[0] + " " + items.productName.split(' ')[1] + " " + items.productName.split(' ')[2]}</th>
                                                        <th>{items.stock}</th>
                                                        <th>{items.price}</th>
                                                        <th>{items.OrderDate.split(',')[0]}</th>
                                                        <th><Link to={"/order/" + (i+1)}><button className="btn btn-sm btn-success">Details</button></Link></th>
                                                    </tr>
                                                )
                                            })
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

export default Order