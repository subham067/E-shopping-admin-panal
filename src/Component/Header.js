import React, { useEffect, useState,useRef } from 'react'
import Dashboard from './Dashboard'
import { Route, Routes, Link, NavLink } from "react-router-dom";
import User from "./User";
import Product from "./Product";
import Order from "./Order";
import Feedback from "./Feedback";
import Errorpage from "./Errorpage";
import Action from './Action';
import Productdetails from './Productdetails';

import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { analytics, auth } from '../Config'
import { AddProduct } from './AddProduct';
import Orderdetails from './Orderdetails';

import { faHouse, faUser, faComment, faPeopleCarryBox, faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { async } from '@firebase/util';
import Deliverorder from './Deliverorder';

function Header() {
    const Manu = useRef()
    const [pData, setpData] = useState([])
    const userCollectionRef = collection(analytics, "product");

    const [data, setData] = useState([])
    const [Userdata, setUserData] = useState([])
    const [DelieveredOrders, setDelieveredOrders] = useState([])
    const userCollectionRefUser = collection(analytics, "user");

    // const userCollectionRef = collection(analytics, "user");

    function Refresh() {
        productData()
        userData()
        AlluserData()
        AllDelieveredOrders()
    }
    async function productData() {
        const data = await getDocs(userCollectionRef)
        setpData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    async function userData() {
        const data = await getDocs(userCollectionRefUser)

        const da = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        let AllData = []
        da.map((d) => {
            AllData = [...AllData, ...d.PendingOrder]
        })

        setData(AllData);
    }

    async function AllDelieveredOrders() {
        const data = await getDocs(userCollectionRefUser)

        const da = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        let AllData = []
        da.map((d) => {
            AllData = [...AllData, ...d.UserOrder]
        })

        setDelieveredOrders(AllData);
    }

    async function AlluserData() {
        const data = await getDocs(userCollectionRefUser)
        setUserData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        const da = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    }

    useEffect(() => {
        productData()
        userData()
        AlluserData()
        AllDelieveredOrders()
    }, [])

    return (
        <>
            <div className="ManuBox" ref={Manu}>
                <div className="Icon"  onClick={()=> Manu.current.style.left = "-100rem"}>Del</div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/Dashboard" className="nav-link" >
                            <FontAwesomeIcon icon={faHouse} />
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/User" className="nav-link">
                            <FontAwesomeIcon icon={faUser} /> Users
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Product" className="nav-link" >
                            <FontAwesomeIcon icon={faGift} /> Products
                            {/* <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">
                                                6
                                            </span> */}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Order" className="nav-link" >
                            <FontAwesomeIcon icon={faPeopleCarryBox} /> Orders
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Deliverorder" className="nav-link" >
                            <FontAwesomeIcon icon={faPeopleCarryBox} />Delivered Orders
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                                        <Link to="/Feedback" className="nav-link" >
                                            <FontAwesomeIcon icon={faComment} /> Feedback
                                        </Link>
                                    </li> */}

                </ul>
            </div>

            <div data-spy="scroll" data-target="header .container-fluid" data-offset="50">
                {/* Dashboard */}
                <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                    {/* Vertical Navbar */}
                    <nav
                        className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
                        id="navbarVertical"
                    >
                        <div className="container-fluid">
                            {/* Toggler */}
                            <button
                            onClick={()=> Manu.current.classList.toggle("show")}
                                className="navbar-toggler ms-n2"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#sidebarCollapse"
                                aria-controls="sidebarCollapse"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"  />
                            </button>

                            <a href="http://localhost:3000/" class="logo"> <i class="fas fa-shopping-basket"></i> Groco </a>
                            {/* User menu (mobile) */}
                            {/* Collapse */}

                            <div className="collapse navbar-collapse" id="sidebarCollapse" ref={Manu} >
                                {/* Navigation */}
                                <ul className="navbar-nav">
                                    <li className="nav-item"   onClick={()=> Manu.current.classList.toggle("show")} >
                                        <NavLink to="/Dashboard" className="nav-link" style={({isActive}) => ({color: isActive ? '#ff7800' : 'black'})}>
                                            <FontAwesomeIcon icon={faHouse} />
                                            Dashboard
                                        </NavLink>
                                    </li>
                                    <li className="nav-item"   onClick={()=> Manu.current.classList.toggle("show")}>
                                        <NavLink to="/User" className="nav-link" style={({isActive}) => ({color: isActive ? '#ff7800' : 'black'})}>
                                            <FontAwesomeIcon icon={faUser} /> Users
                                        </NavLink>
                                    </li>
                                    <li className="nav-item"   onClick={()=> Manu.current.classList.toggle("show")}>
                                        <NavLink to="/Product" className="nav-link" style={({isActive}) => ({color: isActive ? '#ff7800' : 'black'})}>
                                            <FontAwesomeIcon icon={faGift} /> Products
                                            {/* <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">
                                                6
                                            </span> */}
                                        </NavLink>
                                    </li>
                                    <li className="nav-item"   onClick={()=> Manu.current.classList.toggle("show")}>
                                        <NavLink to="/Order" className="nav-link" style={({isActive}) => ({color: isActive ? '#ff7800' : 'black'})}>
                                            <FontAwesomeIcon icon={faPeopleCarryBox} /> Orders
                                        </NavLink>
                                    </li>
                                    <li className="nav-item"   onClick={()=> Manu.current.classList.toggle("show")}>
                                        <NavLink to="/Deliverorder" className="nav-link" style={({isActive}) => ({color: isActive ? '#ff7800' : 'black'})}>
                                            <FontAwesomeIcon icon={faPeopleCarryBox} />Delivered Orders
                                        </NavLink>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link to="/Feedback" className="nav-link" >
                                            <FontAwesomeIcon icon={faComment} /> Feedback
                                        </Link>
                                    </li> */}

                                </ul>
                                {/* Divider */}
                                <hr className="navbar-divider my-5 opacity-20" />
                            </div>

                        </div>
                    </nav>
                    {/* Main content */}
                    <div className="h-screen flex-grow-1 overflow-y-lg-auto">
                        {/* Header */}
                        <header className="bg-surface-primary border-bottom pt-6">
                            <div className="container-fluid">
                                <div className="mb-npx">
                                    <div className="row align-items-center">
                                        <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                                            {/* Title */}
                                            <h1 className="h2 mb-0 ls-tight" style={{ color: "#ff7800" }}>Dashboard For Ecommerce</h1>
                                            <br />
                                        </div>
                                        {/* <Action /> */}
                                    </div>
                                </div>
                            </div>
                        </header>

                        <Routes>
                            <Route path="/User" caseSensitive={false} element={<User Userdata={Userdata} />} />
                            <Route path="/Dashboard" caseSensitive={false} element={<Dashboard data={data} pData={pData} Userdata={Userdata} DelieveredOrders={DelieveredOrders} />} />
                            <Route path="/" caseSensitive={false} element={<Dashboard data={data} pData={pData} Userdata={Userdata} DelieveredOrders={DelieveredOrders} />} />
                            {/* <Route path="/Feedback" caseSensitive={false} element={<Feedback />} /> */}
                            <Route path="/product" caseSensitive={false} element={<Product />} />
                            {/* <Route path="/product/id" caseSensitive={false} element={<Productdetails />} /> */}
                            <Route path="/order" caseSensitive={false} element={<Order data={data} />} />
                            {
                                pData.map((item) => {
                                    return (
                                        <Route path={"/product/" + item.id} caseSensitive={false} element={<Productdetails data={item} Refresh={Refresh} />} />
                                    )
                                })
                            }
                            {
                                data.map((item, i) => {
                                    let a = Number(i) + 1
                                    return (
                                        <Route path={"/order/" + a} caseSensitive={false} element={<Orderdetails Alldata={item} Refresh={Refresh} />} />
                                    )
                                })
                            }

                            <Route path="/Deliverorder" caseSensitive={false} element={<Deliverorder DelieveredOrders={DelieveredOrders} />} />
                            <Route path="*" element={<Errorpage />} />
                            <Route path="/AddProduct" caseSensitive={false} element={<AddProduct />} />
                            <Route path="/Product/AddProduct" caseSensitive={false} element={<AddProduct />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Header