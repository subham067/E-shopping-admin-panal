import React, { useEffect, useState,useRef } from "react";
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { analytics, auth } from '../Config'
import { Link } from "react-router-dom";
import Action from "./Action";

function Product() {
    const [allData, setAllData] = useState([])
    const userCollectionRef = collection(analytics, "product");

    async function productData() {
        const data = await getDocs(userCollectionRef)
        setAllData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        const da = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    }

    let iddd = 0

    useEffect(() => {
        productData()

    }, [])
    function IdFun() {
        iddd++
        return <>{iddd}</>
    }


    return (
        <>
            {/* Main */}
            <main className="py-6 bg-surface-secondary">
                <div className="container-fluid">
                    <div className="col-xl-12 col-sm-12 col-12 col-md-12 col-lg-12">
                        <div className="card shadow border-0">
                            <div className="row">
                                <div className="card-header col-md-9">
                                    <h5 className="mb-0 text-center font-weight-bold text-danger">Products Details Page</h5>
                                </div>
                                <div className="col-md-3 pt-3">
                                    <Action />
                                </div>
                            </div>
                            <div className="card-body">
                                <table cellPadding={1} cellSpacing={1} >
                                    <tbody>
                                        <tr>
                                            <th>Sl. No.</th>
                                            <th>Product Name</th>
                                            <th>Product Type</th>
                                            <th>Price</th>
                                            <th>Stock</th>
                                            <th>Update</th>
                                        </tr>

                                        {
                                            allData.map((items, i) => {
                                                return (
                                                    <>
                                                        {items.Stock < 5 ? <tr>
                                                            <th>{IdFun()}.</th>
                                                            <th style={{ textTransform: "capitalize" }}>{items.name.split(' ')[0] + " " + items.name.split(' ')[1] + " " + items.name.split(' ')[2]}</th>
                                                            <th>{items.Category}</th>
                                                            <th>$ {items.Prize}.00</th>
                                                            <th>{items.Stock}</th>
                                                            <td><Link to={"/product/" + items.id}><button type="button" className={items.Stock < 5 ? "btn btn-sm btn-danger" : "btn btn-sm btn-success"} >Update</button></Link></td>
                                                        </tr> : ""}

                                                    </>
                                                )
                                            }
                                            )
                                        }
                                        {
                                            allData.map((items, i) => {
                                                return (
                                                    <>
                                                        {items.Stock < 5 ? "" : <tr>
                                                            <th>{IdFun()}.</th>
                                                            <th style={{ textTransform: "capitalize" }}>{items.name.split(' ')[0] + " " + items.name.split(' ')[1] + " " + items.name.split(' ')[2]}</th>
                                                            <th>{items.Category}</th>
                                                            <th>$ {items.Prize}.00</th>
                                                            <th>{items.Stock}</th>
                                                            <td><Link to={"/product/" + items.id}><button type="button" className={items.Stock < 5 ? "btn btn-sm btn-danger" : "btn btn-sm btn-success"} >Update</button></Link></td>
                                                        </tr>}

                                                    </>
                                                )
                                            }
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

export default Product