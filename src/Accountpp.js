import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { getToken, removeToken, storeToken } from "./services/LocalStorageSrv";


const Accountpp = () => {
    const userdata = getToken('data')
    const [uid,setuid] = useState(userdata.user_id)
    const [password,setpassword] = useState()
    const [conpass,setconpass] = useState()
    const [response,setresponse] = useState({})
  
  
    const submitform = (e) => {
      e.preventDefault();
      const collectdata = {
        userid:uid,
        updatedpassword:password
      }
      if(password == conpass){
      axios("https://ayuradmin.stackerbee.com/api/user-changepassword", {
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
        console.log("fuuueuueueuueuu",response)
        setconpass('')
        setpassword('')
    }else{
      alert("password did not match")
    }
  }
  return (
    <div className="logincompnet">
        <div className="logintxto" style={{left:"-169px"}}>
          <h2>Update Your Password</h2>
          {response.status == 200 ? (
            <div>
               { response.data.status == 1 ? alert("Successfully Updated") : <div></div>}
                           {/* { response.data.status === 1 ? window.location.reload(false) : <div></div>} */}
              {response.data.status == 0 ? 
                <div>{alert("something went wrong try again")}</div>
              : 
                <div></div>
              }
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
                <label htmlFor="detailoneq">Telephone *</label>
                <input
                  type="phone"
                  name="uphone"
                  id="detailoneq"
                  placeholder="Enter Your Telephone"
                  value={password}
                  onChange={(e) => {setpassword(e.target.value)}}
                />
              </div>
              
              <div className="inputheret">
                <label htmlFor="detailoneqt">Confirm Password *</label>
                <input
                  type="phone"
                  name="uphone"
                  id="detailoneqt"
                  placeholder="Enter Your Telephone"
                  value={conpass}
                  onChange={(e) => {setconpass(e.target.value)}}
                />
              </div>
            </div>

            
            <div className="bottomlog">
              
              <div className="loginbtn">
                <button className="updatecartined">Update Your Password</button>
              </div>
            </div>
          </div>
        </form>
      </div>
  )
}

export default Accountpp