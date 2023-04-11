import { useState } from "react";
import React from "react";
import './App.css';
import Navbar from "./Navbar";
import Header from "./Header";
import Data from "./Data";
import Footer from "./Footer";
export default function App(){
    const [cart,setCart]=useState(0);
    
    
  return(
   <div className="App">
    <Navbar cart={cart} setCart={setCart} />
    <Header />
    <Data cart={cart} setCart={setCart} />
    <Footer />
   </div>
  );
};