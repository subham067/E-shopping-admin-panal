import './App.css';
import React from 'react';
import Header from './Component/Header'
import { BrowserRouter as Router } from "react-router-dom";
import {AddProduct} from './Component/AddProduct';
import Dashboard from './Component/Dashboard';

// import User from "./Component/User";
// import Product from "./Component/Product";
// import Dashboard from "./Component/Dashboard";
// import Order from "./Component/Order";
// import Feedback from "./Component/Feedback";
// import Errorpage from "./Component/Errorpage";

function App() {
  return (
    <div>
      <Router>
        <Header />
        {/* <AddProduct />        */}
        
      </Router>
    </div>
  );
}

export default App;
