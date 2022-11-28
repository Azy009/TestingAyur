import React, { useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Menu from "./component/Menu";
import Lastfooter from "./component/Lastfooter";
import Scrolltotop from "./component/Scrolltotop";
import Socialmedia from "./component/Socialmedia";
import Pagebredcame from "./component/Pagebredcame";
import { Helmet } from "react-helmet";
import axios from "axios";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { removeToken } from "./services/LocalStorageSrv";
const MyAccount = () => {
  const nvg = useNavigate()
  const removeauth = () =>{
    removeToken('data')
    nvg("/")
   }

  return (
    <div>
      <Socialmedia />
      <Helmet>
        <title>My account</title>
        <meta name="description" content="ayur Contact us page" />
        <meta name="keywords" content="herbal product, body care, face care" />
      </Helmet>
      <Header />
      <Scrolltotop />
      <Menu />
      <Pagebredcame title="My Account" />
      <div className="accounttoggle">
       <div className="lefttoggle">
        <NavLink  to="/MyAccount" style={({isActive})=>{return{backgroundColor: isActive ? "#83b53b" : ''}}} className="btnsting"><p>Dashboard</p></NavLink>
        <NavLink to="account3" style={({isActive})=>{return{backgroundColor: isActive ? "#83b53b" : ''}}} className="btnsting"><p>Orders</p></NavLink>
       <NavLink to="account2" style={({isActive})=>{return{backgroundColor: isActive ? "#83b53b" : ''}}} className="btnsting"><p>Addresses</p></NavLink>
        <NavLink to="account5" style={({isActive})=>{return{backgroundColor: isActive ? "#83b53b" : ''}}} className="btnsting"><p>Account Details</p></NavLink>
<p className="btnsting" onClick={removeauth}>Logout</p>
       </div>
       <div className="righttoggle">
        <Outlet />
       </div>
      </div>
      <Footer />
      <Lastfooter />
    </div>
  );
};

export default MyAccount;
