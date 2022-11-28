import React from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Lastfooter from "./component/Lastfooter";
import Menu from "./component/Menu";
import { Helmet } from "react-helmet";
const Error = () => {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Error</title>
        <meta name='description' content='ayur Error page' />
        <meta name='keywords' content='herbal product, body care, face care' />
        
       </Helmet>
      <Menu />
      <div className="error">
        <div className="errortitle">
          <h1>404</h1>
          <h2>OPPS! PAGE NOT BE FOUND</h2>
          <p>
            Sorry but the page you are looking for does not exist, have been
            removed, name changed or is temporarity unavailable.
          </p>
        </div>
        <div className="errorsearch">
            <input type="search" name="" id="" placeholder="Search..." />
            <div className="erroricon">
            <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
        <div className="errorbtn">
            <button>BACK TO HOME PAGE</button>
        </div>
      </div>
      <Footer />
      <Lastfooter />
    </div>
  );
};

export default Error;
