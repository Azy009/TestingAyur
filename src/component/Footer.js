import React, { useState } from "react";
import { useGetcontactinfoQuery, useGetSocailMediaQuery, useGetAllCategoriesQuery } from "../services/apifile";
import { NavLink } from "react-router-dom";
import axios from "axios";
const Footer = () => {
  const [response, setresponse] = useState({});
  const [inputs, setinputs] = useState({});
  const [superemail, setsuperemail] = useState();

  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinputs((values) => ({ ...values, [name]: value }));
  }; 

  const submitlogin = (e) => {
    e.preventDefault();
    
      axios("https://ayuradmin.stackerbee.com/api/newsletter", {
        method: "POST",
        mode: "no-cors",
        data: JSON.stringify(inputs),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
      }).then((res) => setresponse(res));
      setsuperemail("")  

  };
  const respcate = useGetAllCategoriesQuery()
  const supercate = respcate.data
  const contactinfo = useGetcontactinfoQuery();
  const superproduct = contactinfo.data;
  const resp = useGetSocailMediaQuery();
  const superdata = resp.data;
  if (contactinfo.isLoading === true) {
    return <div></div>;
  } else {
    if (resp.isLoading === true) {
      return <div></div>;
    } else {
      if(respcate.isLoading === true){return<div></div>}else{
  return (
    <div className="paddinghori">
      
      <div className="fot1">
      <div className="minfot2">
          <h3 className="fot2head">CONTACT DETAILS</h3>
        </div>
        <div className="fotaddress">
          <div className="fotaddhere">
            <div className="colosize">
              <div className="bindtwo">

            <span className="green">
              {" "}
              <i className="fa-solid fa-location-dot"></i>{" "}
            </span>
            <span className="displayinline paddingleft">Address:</span>
              </div>

            <p className="displayinline">
              {superproduct.data[0].address}
            </p>
            </div>
          </div>
        </div>
        <div className="fotaddress">
          <div className="fotaddhere">
            <span className="green">
              {" "}
              <i className="fa-solid fa-phone"></i>{" "}
            </span>
            <span className="displayinline paddingleft">Call Us:</span>

            <p className="displayinline"><a className="uncolor" href={`tel:${superproduct.data[0].phone_no}`}>{superproduct.data[0].phone_no}</a></p>
          </div>
        </div>
        <div className="fotaddress">
          <div className="fotaddhere">
            <span className="green">
              {" "}
              <i className="fa-solid fa-envelope"></i>{" "}
            </span>
            <span className="displayinline paddingleft">Email:</span>

            <p className="displayinline"><a className="uncolor" href={`mailto:${superproduct.data[0].email_id}`}>{superproduct.data[0].email_id}</a></p>
          </div>
        </div>
      </div>
      <div className="fot2">
        <div className="minfot2">
          <h3 className="fot2head">INFORMATION</h3>
        </div>
        <div className="pages">
          <div className="minfot2">
            <NavLink to="/about-us" style={{color:'#212529',textDecoration:"none"}} >
            <p className="fot2para">About Us</p>
            </NavLink>
          </div>
          <div className="minfot2">
            <NavLink to="/Blog" style={{color:'#212529',textDecoration:"none"}} > 
            <p className="fot2para">Blog</p>
            </NavLink>
          </div>
          <div className="minfot2">
            <NavLink to="/Contact" style={{color:'#212529',textDecoration:"none"}} >
            <p className="fot2para">Contact Us</p>
            </NavLink>
          </div>
          <div className="minfot2">
            <NavLink to="/faq" style={{color:'#212529',textDecoration:"none"}}>
            <p className="fot2para">FAQ</p>
            </NavLink>
          </div>
          <div className="minfot2">
            <NavLink style={{color:'#212529',textDecoration:"none"}}>
            <p className="fot2para">Privacy Policy</p>
            </NavLink>
          </div>
          <div className="minfot2">
            <p className="fot2para">Terms & Conditions</p>
          </div>
          <div className="minfot2">
            <p className="fot2para">Shipping And Return Policy</p>
          </div>
        </div>
      </div>
      <div className="fot4">
      <div className="minfot2">
          <h3 className="fot2head">CATEGORIES</h3>
        </div>
        <div className="pages">
          {/* <MiniCategory uniqe={item.product_cat_id} title={item.product_category} url={item.image1} linkgo={item.pg_url} /> */}
        { respcate.isLoading ? <div>  loading is here</div> :  supercate.data[0].map((item)=>
        <NavLink to={`/${item.pg_url}`} style={{color:'#212529',textDecoration:"none"}} >
          <div className="minfot2">
          <p className="fot2para">{item.product_category.toLowerCase()}</p>
        </div>
        </NavLink>
        )}
        </div>
      </div>
      <div className="fot3">
        <div className="minfot2">
          <h3 className="fot2head">NEWSLETTER</h3>
        </div>
        <div className="pages">
          <div className="minfot2">
            <p className="fot2para">
            Don't miss any updates or promotions by signing up to our newsletter.
            </p>
          </div>
          <div className="minfot2">
          {
            response.status == 200 ? ( <div> { response.data.status == 1 ? alert("You have been subscribed to our newsletter") : <div></div>}{ response.data.status == 1 ? window.location.reload(false) : <div></div>}
            { response.data.status == 0 ? alert("email is not valid") : <div></div>} { response.data.status == 2 ? alert("Newsletter Already Subscribed") : <div></div>}{ response.data.status == 2 ? window.location.reload(false) : <div></div>} </div> ) : <div></div>
          }
            <form onSubmit={submitlogin}>
            <div className="fot2para displayhere">
              {" "}
              <input
                type="email"
                name="nemail"
                value={superemail}
                className="emailaddress"
                placeholder="Enter Your Email"
                onChange={(e) => {setsuperemail(e.target.value); handlechange(e)}}
              />{" "}
              <p className="emailbtn">
                <button type="submit" className="gogog">
                <i
                  className="fa-solid fa-envelope"
                  style={{ fontSize: "15px" }}
                ></i></button>
              </p>
            </div>
            </form>
          </div>
          <div className="minfot2">
            <div className="fot2para socialmeadia">
              <ul>
              {superdata.data[0].facebook == 1 ? <a
            href={superdata.data[0].website_facebook}
            target="_blank"
            style={{ color: "#25330F" }}
          >
            <li className="facebook_social">
              <p>
                <i className="fa-brands fa-facebook-f"></i>
              </p>
            </li>
          </a> : <div></div>}
          {superdata.data[0].twitter == 1 ? <a href={superdata.data[0].website_twitter} target="_blank" style={{ color: "#25330F" }}>
            <li className="twitter_social">
              <p>
                <i className="fa-brands fa-twitter"></i>
              </p>
            </li>
          </a> : <div></div>}
          
          {superdata.data[0].instagram == 1 ? <a
            href={superdata.data[0].website_instagram}
            target="_blank"
            style={{ color: "#25330F" }}
          >
            <li className="twitter_social">
              <p>
                <i className="fa-brands fa-instagram"></i>
              </p>
            </li>
          </a> : <div></div>}
          {superdata.data[0].youtube == 1 ? <a href={superdata.data[0].website_youtube} target="_blank" style={{ color: "#25330F" }}>
            <li className="googleplus_social">
              <p>
                <i className="fa-brands fa-youtube"></i>
              </p>
            </li>
          </a> : <div></div>}
          {superdata.data[0].pinterest == 1 ? <a
            href={superdata.data[0].website_pinterest}
            target="_blank"
            style={{ color: "#25330F" }}
          >
            <li className="pinterest_social">
              <p>
                <i className="fa-brands fa-pinterest-p"></i>
              </p>
            </li>
          </a> : <div></div>}
          {superdata.data[0].linkedin == 1 ?           <a
            href={superdata.data[0].website_linkedin}
            target="_blank"
            style={{ color: "#25330F" }}
          >
            <li className="linkedin_social">
              <p>
                <i className="fa-brands fa-linkedin"></i>
              </p>
            </li>
          </a> : <div></div>}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
          }
    }
  }
};

export default Footer;
