import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Lastfooter from "./component/Lastfooter";
import Menu from "./component/Menu";
import Pagebredcame from "./component/Pagebredcame";
import Scrolltotop from "./component/Scrolltotop";
import { storeToken } from "./services/LocalStorageSrv";

const Login = () => {
  const [response, setresponse] = useState({});
  const [inputs, setinputs] = useState({});

  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinputs((values) => ({ ...values, [name]: value }));
  }; 
  const nvg = useNavigate()
  const submitlogin = (e) => {
    e.preventDefault();
    
      axios("https://ayuradmin.stackerbee.com/api/login", {
        method: "POST",
        mode: "no-cors",
        data: JSON.stringify(inputs),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
      }).then((res) => setresponse(res));
     console.log(response)

  };
 
  return (
    <div>
      <Header />
      <Menu />
      <Helmet>
        <title>Login</title>
        <meta name="description" content="ayur home page" />
        <meta name="keywords" content="herbal product, body care, face care" />
      </Helmet>
      <Pagebredcame title="Login" />
      <div className="logincompnet">
        <div className="logintxtreal">
          <h2>Login</h2>
          {
            response.status == 200 ? ( <div> { response.data.status == 1 ? storeToken(response.data.data[0]) : <div></div>}</div> ) : <div></div>
          }
          {
            response.status == 200 ? ( <div> { response.data.status == 1 ? nvg('/MyAccount') : <div></div>}</div> ) : <div></div>
          }
          {
            response.status == 200 ? ( <div> { response.data.status == 0 ? alert("Something went wrong try again") : <div></div>}</div> ) : <div></div>
          }
          {
            response.status == 200 ? ( <div> { response.data.status == 0 ? window.location.reload(false) : <div></div>}</div> ) : <div></div>
          }
        </div>
        <form  onSubmit={submitlogin} >
        <div className="loginform">
          <div className="inputoneheret">
            <label htmlFor="detailone">Email *</label>
            <input type="email" name="lemail" id="detailone" onChange={(e) => { handlechange(e)}} />
          </div>

          <div className="inputoneheret">
            <label htmlFor="detail">Password *</label>
            <input type="password" name="lpassword" id="detail" onChange={(e) => { handlechange(e)}} />
          </div>
          <div className="bottomlog">
         <div className="lostpass">
            <p>Lost your password?</p>
         </div>
         <div className="loginbtn">
            <button className="updatecartined" type="submit">Login</button>
         </div>
          </div>
        </div>
        </form>
      </div>
      <Scrolltotop />
      <Footer />
      <Lastfooter />
    </div>
  );
};

export default Login;
