import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Lastfooter from "./component/Lastfooter";
import Menu from "./component/Menu";
import Pagebredcame from "./component/Pagebredcame";
import Scrolltotop from "./component/Scrolltotop";
import axios from "axios";
import { storeToken } from "./services/LocalStorageSrv";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nvg = useNavigate();
  const [rname, setrname] = useState();
  const [rlast, setrlast] = useState();
  const [remail, setremail] = useState();
  const [rphone, setrphone] = useState();
  const [rpassword, setrpassword] = useState();
  const [rconfirmpass, setrconfirmpass] = useState();
  const [response, setresponse] = useState({});
  const [inputs, setinputs] = useState({});

  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinputs((values) => ({ ...values, [name]: value }));
  };
  const submitform = (e) => {
    e.preventDefault();
    if (rpassword === rconfirmpass) {
      axios("https://ayuradmin.stackerbee.com/api/registration", {
        method: "POST",
        mode: "no-cors",
        data: JSON.stringify(inputs),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
      }).then((res) => {
        setresponse(res);
      });
    } else {
      alert("Confirm Password didn't Match");
    }
  };
  return (
    <div>
      <Header />
      <Menu />
      <Helmet>
        <title>Register</title>
        <meta name="description" content="ayur home page" />
        <meta name="keywords" content="herbal product, body care, face care" />
      </Helmet>

      <Pagebredcame title="Register" />
      <div className="logincompnet">
        <div className="logintxt">
          <h2>Register</h2>
          {response.status === 200 ? (
            <div>
               {response.data.status === 1 ? 
                storeToken(response.data.data[0])
              : 
                <div></div>
              }
               {
            response.status === 200 ? ( <div> { response.data.status === 1 ? nvg('/MyAccount') : <div></div>}</div> ) : <div></div>
          }
              {response.data.status === 0 ? 
                <div>{alert("This Email Already Link To Another Account")}</div>
              : 
                <div></div>
              }
              { response.data.status === 0 ? window.location.reload(false) : <div></div>}
              {response.data.status === 2 ? 
                <div>{alert("Something Went Wrong Try Again")}</div>
              : 
                <div></div>
              }
               { response.data.status === 2 ? window.location.reload(false) : <div></div>}
            </div>
          ) : (
            <div></div>
          )}
          
        </div>
        <form onSubmit={submitform}>
          <div className="loginform">
            <div className="group">
              <div className="inputheret">
                <label htmlFor="detailonet">First Name *</label>
                <input
                  type="text"
                  name="rname"
                  id="detailonet"
                  placeholder="First Name"
                  value={rname}
                  required
                  onChange={(e) => {
                    setrname(e.target.value.replace(/[^a-zA-Z]/gi, ""));
                    handlechange(e);
                  }}
                />
              </div>
              <div className="inputheret">
                <label htmlFor="detailonee">Last Name *</label>
                <input
                  type="text"
                  name="rlast"
                  id="detailonee"
                  placeholder="Last Name"
                  value={rlast}
                  required
                  onChange={(e) => {
                    setrlast(e.target.value.replace(/[^a-zA-Z]/gi, ""));
                    handlechange(e);
                  }}
                />
              </div>
            </div>

            <div className="group">
              <div className="inputheret">
                <label htmlFor="detailonew">Email *</label>
                <input
                  type="email"
                  name="remail"
                  id="detailonew"
                  placeholder="E-Mail"
                  value={remail}
                  required
                  onChange={(e) => {
                    setremail(e.target.value);
                    handlechange(e);
                  }}
                />
              </div>
              <div className="inputheret">
                <label htmlFor="detailoneq">Telephone *</label>
                <input
                  type="phone"
                  name="rphone"
                  id="detailoneq"
                  maxLength={10}
                  minLength={10}
                  placeholder="Telephone"
                  value={rphone}
                  onChange={(e) => {
                    setrphone(e.target.value.replace(/[^0-9]/gi, ""));
                    handlechange(e);
                  }}
                />
              </div>
            </div>

            <div className="group">
              <div className="inputheret">
                <label htmlFor="detailones">Password *</label>
                <input
                  type="password"
                  name="rpassword"
                  id="detailones"
                  placeholder="Password"
                  value={rpassword}
                  onChange={(e) => {
                    setrpassword(e.target.value);
                    handlechange(e);
                  }}
                />
              </div>
              <div className="inputheret">
                <label htmlFor="detailonec">Password Confirm *</label>
                <input
                  type="password"
                  name="rconfirmpass"
                  id="detailonec"
                  placeholder="Password Comfirm"
                  value={rconfirmpass}
                  onChange={(e) => {
                    setrconfirmpass(e.target.value);
                    handlechange(e);
                  }}
                />
              </div>
            </div>
            <div className="bottomlog">
              <div className="lostpass">
                <p>Already have an account?</p>
              </div>
              <div className="loginbtn">
                <button className="updatecartined">Register</button>
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

export default Register;
