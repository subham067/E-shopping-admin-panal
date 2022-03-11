import React, { useEffect, useState } from "react";
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { analytics, auth } from '../Config'
import { Link } from "react-router-dom";
import Action from "./Action";
import swal from 'sweetalert';
import {useNavigate} from "react-router-dom"
import { async } from "@firebase/util";

function Orderdetails({ Alldata,Refresh }) {
    const Navigate = useNavigate();
    const [pData, setpData] = useState({ UserName: "", UserMobile: "", UserId: "" })
    const userCollectionRef = collection(analytics, "product");

    const [data1, setData] = useState([])
    const [PPdATA, setPPdATA] = useState()
    const userCollectionRefUser = collection(analytics, "user");

    async function productData() {
        const data = await getDocs(userCollectionRef)
        let Product = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        Product.map((p) => {
            if (p.id == Alldata.productId) {
                setPPdATA({...p})
                

            }
        })
    }

    async function userData() {
        const data = await getDocs(userCollectionRefUser)
        let AllData1 = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        AllData1.map((p) => {
            if (p.UaerId == Alldata.UserId) {
                setpData({ UserName: p.UserName, UserMobile: p.UserMobile, UserId: p.UaerId })
                setData(p)
            }
        })
        // setData(AllData);
    }

    function Delr() {
        swal({
            title: "Are you sur?",
            text: "Once Submitted, You will not be able to cancel this order!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willOrder) => {
                if (willOrder) {
                    swal("Your Pending Order Submitted Successfully!", {
                        icon: "success",
                    });
                    Pdelivery()
                    
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }
   async function Pdelivery() {
       if (PPdATA.Stock < Alldata.stock ) {
        swal({
            title: "Out of Stock .",
            // text: `totalstock - ${PPdATA.Stock} your order stock - ${Alldata.stock} `,
            text: `Our Stock = ${PPdATA.Stock} please order less than ${PPdATA.Stock}`,
            icon: "warning",
           
        })
       } else{
    const userDoc = doc(analytics, "product", PPdATA.id);
    await updateDoc(userDoc, { ...PPdATA, Stock: PPdATA.Stock - Alldata.stock })
    .then(()=>{
        delivery()
    })
 .catch(e => console.log(e))
       }
    }
    async function delivery() {

        let Sohom = data1.PendingOrder.filter((efw) => {
            return efw.OrderId !== Alldata.OrderId;
        })

        const ddd = new Date();

        let subham = {
            ...Alldata,
            DeliveryDate: ddd.toLocaleString()
        }
        const userDoc = doc(analytics, "user", data1.id);
        await updateDoc(userDoc, { ...data1, PendingOrder: [...Sohom], UserOrder: [...data1.UserOrder, subham] })
            .then(() => {
                Refresh()
                Navigate("/Order")

            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        productData()
        userData()
    }, [])




    return (


        <>
            {/* Main */}
            <main className="py-6 bg-surface-secondary">
                <div className="container-fluid">
                    <div className="col-xl-12 col-sm-12 col-12">
                        <div className="card shadow border-0">
                            <div className="card-header">
                                <h5 className="mb-0 text-center font-weight-bold text-danger">Pending Orders Update Page</h5>
                            </div>

                            <div className="card-body">
                                <table cellPadding={1} cellSpacing={1} >
                                    <tbody>
                                        <div className='container'>
                                            <div className="mb-3">
                                                <h4><span style={{ color: "#696969" }}>User Name : </span>
                                                    {pData.UserName}</h4>
                                                <hr className="hrN" />
                                            </div>
                                            <div className="mb-3">
                                                <h4><span style={{ color: "#696969" }}>User Address : </span>
                                                    {/* Newtown , Kolkata ,
                                                    West Bengal ,
                                                    Pin:700135 */}
                                                    {Alldata.Address.Address},&nbsp;
                                                    {Alldata.Address.City},&nbsp;
                                                    Pin Code: {Alldata.Address.Pincode},&nbsp;
                                                    {Alldata.Address.State}
                                                </h4>
                                                <hr className="hrN" />
                                            </div>
                                            <div className="mb-3">
                                                <h4><span style={{ color: "#696969" }}>User Mobile : </span>
                                                    {pData.UserMobile}</h4>
                                                <hr className="hrN" />
                                            </div>
                                            <div className="mb-3">
                                                <h4><span style={{ color: "#696969" }}>Product Name : </span>
                                                    {Alldata.productName}</h4>
                                                <hr className="hrN" />
                                            </div>
                                            <div className="mb-3">
                                                <h4><span style={{ color: "#696969" }}>Product Quantity : </span>
                                                    {Alldata.stock}</h4>
                                                <hr className="hrN" />
                                            </div><div className="mb-3">
                                                <h4><span style={{ color: "#696969" }}>Product Price : </span>
                                                    {Alldata.price}</h4>
                                                <hr className="hrN" />
                                            </div>
                                            <div className="mb-3">
                                                <h4><span style={{ color: "#696969" }}>Order Date : </span>
                                                    {Alldata.OrderDate}</h4>
                                                <hr className="hrN" />
                                            </div>

                                            <button className='btn btn-dark' onClick={Delr}>Submit</button>&nbsp;
                                            <Link to="../Order"><button className='btn btn-dark'>Back</button></Link>
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

export default Orderdetails