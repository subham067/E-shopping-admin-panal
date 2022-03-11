import React, { useEffect, useState } from "react";
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { analytics, auth } from '../Config'
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { Redirect } from "react-router-dom"
import swal from 'sweetalert';
import Action from "./Action";
import Product from "./Product";

function Productdetails({ data }) {
    const [dataa, setData] = useState({ name: data.name, Desc: data.Desc, Prize: data.Prize, Stock: data.Stock })
    // const [allData, setAllData] = useState([])
    // const userCollectionRef = collection(analytics, "product");

    async function productData() {

        const userDoc = doc(analytics, "product", data.id);
        await updateDoc(userDoc, { ...data, name: dataa.name, Desc: dataa.Desc, Prize: dataa.Prize, Stock: dataa.Stock })
            .then(() => {
                
                setData({ name: "", Desc: "", Prize: "", Stock: "" })
                swal("Good job!", "Product Updated Successfully!", "success");



            })
            .catch(e => console.log(e))

        

    }


 
    return (


        <>
            {/* Main */}
            <main className="py-6 bg-surface-secondary">
                <div className="container-fluid">
                    <div className="col-xl-12 col-sm-12 col-12">
                        <div className="card shadow border-0">
                            <div className="card-header">
                                <h5 className="mb-0 text-center font-weight-bold text-danger">Products Update Page</h5>
                            </div>

                            <div className="card-body">
                                <table cellPadding={1} cellSpacing={1} >
                                    <tbody>

                                        <div className='container'>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label font-weight-bold">
                                                    Product Name
                                                </label>
                                                <input
                                                    value={dataa.name}
                                                    onChange={e => setData({ ...dataa, name: e.target.value })}
                                                    type="text"
                                                    className="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Enter Product Name"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput2" className="form-label font-weight-bold">
                                                    Product Price
                                                </label>
                                                <input
                                                    value={dataa.Prize}
                                                    onChange={e => setData({ ...dataa, Prize: e.target.value })}
                                                    type="number"
                                                    className="form-control"
                                                    id="exampleFormControlInput2"
                                                    placeholder="Product Prize"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label font-weight-bold">
                                                    Product Stock
                                                </label>
                                                <input
                                                    value={dataa.Stock}
                                                    onChange={e => setData({ ...dataa, Stock: e.target.value })}
                                                    type="number"
                                                    className="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder=" Product Stock"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlTextarea1" className="form-label font-weight-bold">
                                                    Product Description
                                                </label>
                                                <textarea
                                                    value={dataa.Desc}
                                                    onChange={e => setData({ ...dataa, Desc: e.target.value })}
                                                    className="form-control"
                                                    id="exampleFormControlTextarea1"
                                                    rows={5}
                                                    defaultValue={""}
                                                />
                                            </div>

                                            <Link to="../Product"><button className='btn btn-dark' onClick={() => productData()} >Submit</button></Link>
                                        </div>

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

export default Productdetails