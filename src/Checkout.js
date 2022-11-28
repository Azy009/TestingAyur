import React, { useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Lastfooter from "./component/Lastfooter";
import Menu from "./component/Menu";
import img2 from "./assets/img/icon/papyel.png"
import Scrolltotop from "./component/Scrolltotop";
import Socialmedia from "./component/Socialmedia";
import Pagebredcame from "./component/Pagebredcame";
import { Helmet } from "react-helmet";
const Checkout = () => {
  const [wwe, setwwe] = useState(false);
  return (
    <div>
      <Socialmedia />
      <Helmet>
        <title>CheckOut</title>
        <meta name='description' content='ayur Checkout page' />
        <meta name='keywords' content='herbal product, body care, face care' />
        
       </Helmet>
      <Header />
      <Scrolltotop />
      <Menu />
      <Pagebredcame title="CHECKOUT" />
      <div className="checkoutbody">
        <div className="checkoutone">
          <h3>
            <i classNamee="fa-duotone fa-file-code"></i> Returning customer?{" "}
            <span> Click here to login</span>
          </h3>
        </div>
        <div className="logincomp">
          <div className="logintitle">
            <p>
              If you have shopped with us before, please enter your details in
              the boxes below. If you are a new customer please proceed to the
              Billing & Shipping section.
            </p>
          </div>
          <div className="logininput">
            <div className="inputonehere">
              <label htmlFor="detailone">Username or email *</label>
              <input type="text" name="detailone" id="detailone" />
            </div>
            <div className="inputonehere">
              <label htmlFor="detailtwo">Password *</label>
              <input type="password" name="detailone" id="detailtwo" />
            </div>
          </div>
          <div className="loginbtns">
            <button className="updatecart">LOGIN</button>
            <input type="checkbox" name="checkhere" id="checkoutl" />
            <label htmlFor="checkoutl">Remember me</label>
          </div>
          <div className="lastpass">
            <p>Last your password?</p>
          </div>
        </div>
        <div className="checkoutone">
          <h3>
            <i className="fa-duotone fa-file-code"></i> Returning customer?{" "}
            <span> Click here to Enter Your Code</span>
          </h3>
        </div>
        <div className="checkoutform">
          <div className="leftcheckout">
            <div className="lefttitle">
              <p>BILLING DETAILS</p>
            </div>
            <div className="twoinput">
              <div className="firstlabel">
                <label htmlFor="onehere">First Name *</label>
                <input type="text" id="onehere" />
              </div>
              <div className="secondlabel">
                <label htmlFor="twohere">Last Name *</label>
                <input type="text" id="twohere" />
              </div>
            </div>
            <div className="companyname">
              <label htmlFor="company">Company Name *</label>
              <input type="text" id="company" />
            </div>
            <div className="companyname">
              <label htmlFor="company">Country *</label>
              <input type="text" id="company" />
            </div>
            <div className="companyname">
              <label htmlFor="company sparte">Street address *</label>
              <input
                type="text"
                id="company"
                placeholder="House number and street name"
              />
              <input
                type="text"
                id="company"
                placeholder="Apartment, suite, unit etc. (optional)"
              />
            </div>
            <div className="companyname">
              <label htmlFor="torc">Town / City *</label>
              <input type="text" id="torc" />
            </div>
            <div className="companyname">
              <label htmlFor="company">State / County *</label>
              <input type="text" id="company" />
            </div>
            <div className="twoinput">
              <div className="firstlabel">
                <label htmlFor="onehere">Phone *</label>
                <input type="text" id="onehere" />
              </div>
              <div className="secondlabel">
                <label htmlFor="twohere">Email Address *</label>
                <input type="text" id="twohere" />
              </div>
            </div>
            <div className="checkuser">
              <input type="checkbox" id="company" />
              <label htmlFor="company">Create an account? </label>
            </div>
            <div className="checkuser">
              <input type="checkbox" id="gogog" className="gogoe"  checked={wwe ? true : false }  />

              <label
                htmlFor="gogog"
                className="updatecart"
                style={{ color: "#fff" }}
                onClick={() => setwwe(!wwe)}
              >
                {" "}
                Ship To A Different Address?
              </label>
            </div>
            <div className={wwe ? "showform" : "showdiff"}>
              <div className="twoinput">
                <div className="firstlabel">
                  <label htmlFor="onehere">First Name *</label>
                  <input type="text" id="onehere" />
                </div>
                <div className="secondlabel">
                  <label htmlFor="twohere">Last Name *</label>
                  <input type="text" id="twohere" />
                </div>
              </div>
              <div className="companyname">
                <label htmlFor="company">Company Name *</label>
                <input type="text" id="company" />
              </div>
              <div className="companyname">
                <label htmlFor="company">Country *</label>
                <input type="text" id="company" />
              </div>
              <div className="companyname">
                <label htmlFor="company sparte">Street address *</label>
                <input
                  type="text"
                  id="company"
                  placeholder="House number and street name"
                />
                <input
                  type="text"
                  id="company"
                  placeholder="Apartment, suite, unit etc. (optional)"
                />
              </div>
              <div className="companyname">
                <label htmlFor="torc">Town / City *</label>
                <input type="text" id="torc" />
              </div>
              <div className="companyname">
                <label htmlFor="company">State / County *</label>
                <input type="text" id="company" />
              </div>
              <div className="twoinput">
                <div className="firstlabel">
                  <label htmlFor="onehere">Phone *</label>
                  <input type="text" id="onehere" />
                </div>
                <div className="secondlabel">
                  <label htmlFor="twohere">Email Address *</label>
                  <input type="text" id="twohere" />
                </div>
              </div>
            </div>
            <div className="companyname">
              <label htmlFor="company">Order Notes *</label>
              <input
                type="text"
                id="company"
                placeholder="Notes about your order, e.g. special notes for delivery."
              />
            </div>
          </div>
          <div className="rightcheckout">
          <div className="lefttitle">
              <p>YOUR ORDER</p>
            </div>
            <div className="sperater">
                <div className="rightsp">
                    <p>Product</p>
                </div>
                <div className="rightspr">
                    <p>Total</p>
                </div>
            </div>
            <div className="speraterclr">
                <div className="rightsp" style={{borderRight:"1px solid #e5e5e5"}}>
                    <p>Handbag Fringilla × 2</p>
                </div>
                <div className="rightspr">
                    <p>$165.00</p>
                </div>
            </div>
            <div className="speraterclr">
                <div className="rightsp" style={{borderRight:"1px solid #e5e5e5"}}>
                    <p>Handbag Justo × 2</p>
                </div>
                <div className="rightspr">
                    <p>$50.00</p>
                </div>
            </div>
            <div className="speraterclr">
                <div className="rightsp" style={{borderRight:"1px solid #e5e5e5"}}>
                    <p>Handbag Elit × 2</p>
                </div>
                <div className="rightspr">
                    <p>$50.00</p>
                </div>
            </div>
            <div className="speraterclr">
                <div className="rightsp" style={{borderRight:"1px solid #e5e5e5"}}>
                    <p>Handbag Rutrum × 1</p>
                </div>
                <div className="rightspr">
                    <p>$50.00</p>
                </div>
            </div>
            <div className="speraterclrmore">
                <div className="rightsp" >
                    <p>Cart Subtotal</p>
                </div>
                <div className="rightspr">
                    <p>$215.00</p>
                </div>
            </div>
            <div className="speraterclrmore">
                <div className="rightsp" >
                    <p>Shipping</p>
                </div>
                <div className="rightspr">
                    <p>$5.00</p>
                </div>
            </div>
            <div className="speraterclrmore">
                <div className="rightsp" >
                    <p>Order Total</p>
                </div>
                <div className="rightspr">
                    <p>$220.00</p>
                </div>
            </div>
            <div className="checkbtno">
                <input type="checkbox"  id="frfr" />
                <label htmlFor="frfr"> Create an account?</label>
            </div>
            <div className="checkbtno" style={{margin:"0px"}}>
                <input type="checkbox"  id="frfr" />
                <label htmlFor="frfr"> Pay <img src={img2} alt="eertr" /></label>
            </div>
            <div><button className="updatecartined">Proceed To PayPal</button></div>
          </div>
        </div>
      </div>
      <Footer />
      <Lastfooter />
    </div>
  );
};

export default Checkout;
