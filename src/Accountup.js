import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Lastfooter from "./component/Lastfooter";
import Menu from "./component/Menu";
import Pagebredcame from "./component/Pagebredcame";
import Scrolltotop from "./component/Scrolltotop";
import { getToken, removeToken, storeToken } from "./services/LocalStorageSrv";


const Accountup = () => {
    const userdata = getToken('data')
    const [uid,setuid] = useState(userdata.user_id)
    const [username,setusername] = useState(userdata.uname)
    const [uname,setuname] = useState(userdata.name)
    const [uemail,setuemail] = useState(userdata.email)
    const [uphone,setuphone] = useState(userdata.phone)
    const [ustate,setustate] = useState(userdata.state)
    const [ucity,setucity] = useState(userdata.city)
    const [uzipcode,setuzipcode] = useState(userdata.zipcode)
    const [uaddress,setuaddress] = useState(userdata.address)
    const [response,setresponse] = useState({})
  
  
    const submitform = (e) => {
      e.preventDefault();
      const collectdata = {
        userid:uid,
        uname:uname,
        username:username,
        uemail:uemail,
        uphone:uphone,
        uaddress:uaddress,
        ustate:ustate,
        ucity:ucity,
        uzipcode:uzipcode
      }
      console.log("sssssssssssdddddddddddddddd",collectdata)
      axios("https://ayuradmin.stackerbee.com/api/update-user-info", {
          method: "POST",
          mode: "no-cors",
          data: JSON.stringify(collectdata),
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
          },
        }).then((res) => {
          setresponse(res);
        });
        if(response.status == 200){
          if(response.data.status == 1){
            storeToken(collectdata)
          }
        }
    };
  
  return (
    <div className="logincompnet">
        <div className="logintxto">
          <h2>Update Your Info</h2>
          {response.status == 200 ? (
            <div>
               {response.data.status == 1 ? 
                removeToken('data')
              : 
                <div></div>
              }
              {response.data.status == 1 ? 
                storeToken(response.data.data[0])
              : 
                <div></div>
              }
              { response.data.status === 1 ? window.location.reload(false) : <div></div>}
               {
            response.status == 200 ? ( <div> { response.data.status == 1 ? alert("Successfully Updated") : <div></div>}</div> ) : <div></div>
          }
              {response.data.status == 0 ? 
                <div>{alert("something went wrong try again")}</div>
              : 
                <div></div>
              }
              { response.data.status === 0 ? window.location.reload(false) : <div></div>}
            </div>
          ) : (
            <div></div>
          )}
          
        </div>
        <form onSubmit={submitform}>
       
          <div className="loginform">
            
            <div className="group">
                <input
                  type="hidden"
                  value={uid}
                  onChange={(e) => {setuid(e.target.value)}}
                />
              <div className="inputheret">
                <label htmlFor="detailonet">Username * </label>
                <input
                  type="text"
                  name="uname"
                  id="detailonet"
                  placeholder=" Enter Your Username"
                  value={username}
                  required
                  onChange={(e) => {setusername(e.target.value.replace(/[^a-zA-Z]/gi, ""))}}
                />
              </div>
              <div className="inputheret">
                <label htmlFor="detailonet">Full Name * </label>
                <input
                  type="text"
                  name="uname"
                  id="detailonet"
                  placeholder=" Enter Your Full Name"
                  value={uname}
                  required
                  onChange={(e) => {setuname(e.target.value.replace(/[^a-zA-Z]/gi, ""))}}
                />
              </div>
             
            </div>

            <div className="group">
            <div className="inputheret">
                <label htmlFor="detailonewq">Email *</label>
                <input
                  type="email"
                  name="uemail"
                  id="detailonewq"
                  placeholder="Enter Your E-Mail"
                  value={uemail}
                  required
                  onChange={(e) => {setuemail(e.target.value)}}
                />
              </div>
              <div className="inputheret">
                <label htmlFor="detailonewr">Address *</label>
                <input
                  type="text"
                  name="uaddress"
                  id="detailonewr"
                  placeholder="Enter Your Address"
                  value={uaddress}
                  required
                  onChange={(e) => {setuaddress(e.target.value)}}
                />
              </div>
              
            </div>

            <div className="group">
            <div className="inputheret">
                <label htmlFor="detailoneq">Telephone *</label>
                <input
                  type="phone"
                  name="uphone"
                  id="detailoneq"
                  maxLength={10}
                  minLength={10}
                  placeholder="Enter Your Telephone"
                  value={uphone}
                  onChange={(e) => {setuphone(e.target.value.replace(/[^0-9]/gi, ""))}}
                />
              </div>
              <div className="inputheret">
                <label htmlFor="detailones">State *</label>
                <input
                  type="text"
                  name="ustate"
                  id="detailones"
                  placeholder="Enter Your State"
                  value={ustate}
                  onChange={(e) => {setustate(e.target.value.replace(/[^a-zA-Z]/gi, ""))}}
                />
              </div>
              
            </div>
            <div className="group">
              <div className="inputheret">
                <label htmlFor="detailonec">City *</label>
                <input
                  type="text"
                  name="ucity"
                  id="detailonec"
                  placeholder="Enter Your City"
                  value={ucity}
                  onChange={(e) => {setucity(e.target.value.replace(/[^a-zA-Z]/gi, ""))}}
                />
              </div>
              <div className="inputheret">
                <label htmlFor="detailoneco">Pincode *</label>
                <input
                  type="text"
                  name="uzipcode"
                  id="detailoneco"
                  minLength={6}
                  maxLength={6}
                  placeholder="Enter Your Zipcode"
                  value={uzipcode}
                  onChange={(e) => {setuzipcode(e.target.value.replace(/[^0-9]/gi, ""))}}
                />
              </div>
            </div>
            
            <div className="bottomlog">
              
              <div className="loginbtn">
                <button className="updatecartined">Updateprofile</button>
              </div>
            </div>
          </div>
        </form>
      </div>
  )
}

export default Accountup