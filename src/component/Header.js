import "../App.css";
import React, { useEffect,useState } from "react";
import img123 from "../assets/img/icon/abcd.png"
import { FaUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useGetProductByNameQuery, useGetSocailMediaQuery } from "../services/apifile";
import { getipToken, getToken } from "../services/LocalStorageSrv";
import { removeToken } from "../services/LocalStorageSrv";
import axios from "axios";
const Header = () => {
  const inputfocushere = React.createRef()
  const [godclass, setgodclass] = useState(true)
const changeclass = () =>{
  setsearchpro()
setgodclass(false)
inputfocushere.current.focus()
}
const rechangeevent = () =>{
  if(searchpro === ""){
    setsearchpro('')
    setgodclass(true)
}
}
  const [searchpro, setsearchpro] = useState()
const resped = useGetProductByNameQuery(searchpro)

const rerespod = resped.data

console.log(resped)
  const nvg = useNavigate()
  const [getip,setgetip] = useState({})
  const userdata = () => {
    fetch(
      "https://geolocation-db.com/json/67273a00-5c4b-11ed-9204-d161c2da74ce"
    )
      .then((response) => response.json())
      .then((data) => setgetip(data));
  };
  useEffect(() => {
    userdata();

  }, []);
  let person;
  const userdataed = getToken("data");
  if (getToken("data")) {
    person = userdataed.user_id;
  } else {
    person = 0;
  }
  let userrealip
  if (getip) {
    userrealip = getip.IPv4;
  } else {
    userrealip = "";
  }
let respofprod
const Handlesearch = (e) =>{
console.log(e)
}
  const thisdata = {
    userip: userrealip,
    userid: person,
  };
  

  const [response, setresponse] = useState([]);

  const postspec = () => {
    if(userrealip){
    axios("https://ayuradmin.stackerbee.com/api/viewcartpost", {
      method: "POST",
      mode: "no-cors",
      data: JSON.stringify(thisdata),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    }).then((res) => {
      setresponse(res);
    });
  }else{
  }
}


  useEffect(() => {
      postspec();
  }, [userrealip]);

function newfun(){
  nvg("/")
}
  const removeauth = () =>{
    removeToken('data')
    nvg("/")
   }

  const localdata = getToken('data')
  const resp = useGetSocailMediaQuery()
 const superdata = resp.data
if(resp.isLoading === true){return<div></div>}else{
  if(resped.isLoading === true){return<div></div>}else{
  return (
    <div className="headercontainer">
      <div className="logo">
      <NavLink to="/" >

        <img src={`https://ayuradmin.stackerbee.com/upload/${superdata.data[0].website_logo}`} alt="logo" className="logoimg" />
      </NavLink>
      </div>
      <div className="searchbar">
      <div class={godclass ? "wrapper" : "wrapperding"} onClick={changeclass}>
    <div class="static-txt">Search</div>
    <ul class="dynamic-txts">
      <li><span>Sun Care</span></li>
      <li><span>Skin Care</span></li>
      <li><span>Body Care</span></li>
      <li><span>Hair Care</span></li>
    </ul>
  </div>
        <div className="undersearch">
          <div className="serachicon">
            <i className="fa fa-search form-control-feedback"></i>
          </div>
          <div className="searchinput">
            <input
              type="text"
              ref={inputfocushere}
              name="search"
              value={searchpro}
              placeholder=""
              className="searchinput"
               onBlur={rechangeevent}
               onChange={(e)=>setsearchpro(e.target.value)}
              onKeyUp={(e)=>Handlesearch(e.target.value)}
            />
          </div>
          </div>
          {rerespod.status === 1 ? <div className="resres">
          {searchpro === "" ? <div></div> : <div className="givescroll" >{rerespod.data[0].map((item) => (
            <NavLink to={`/product-details/${item.pg_url}`} className="changeton">
            <div className="autosize">
              <div className="resimg">
                <img  src={`https://ayuradmin.stackerbee.com/upload/product/${item.image}`} />
              </div>
              <div className="restitle">
                <h5>{`${item.product_title.substr(0,35)} ...`}</h5>
              <p><span className='changeicon'>₹</span>{`${item.mrp_price}.00`}</p>
              </div>
            </div>
            </NavLink>
            ))}</div>}
        </div> : <div></div>}
          
      </div>
      <div className="headerleft">
        <div className="shopcart">
          <NavLink to="/cart" style={{color:"#83b53b"}}>
       <img src={img123} alt="error" className="carticon" />
        </NavLink>
        {response.status == 200 ? (<div>{response.data.status == 1 ? <h2 style={{color:"white"}}>{response.data.incart}</h2>: <div></div>}{response.data.status == 0 ? <h2 style={{color:"white"}}>{response.data.incart}</h2>: <div></div>}</div>) : <div></div> }     
        </div>
        {
         localdata ? <div className="user">
         <div className="myicon">
         <FaUserCircle size={28} />
         <p className="mycarthere">My Account</p>
         </div>
         <div className="shortmenu">
          <ul>
            <li>
              <NavLink to="/Myaccount" className="changetext">
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li onClick={removeauth}>
              <NavLink to="#" className="changetext">
                <p>Logout</p>
              </NavLink>
            </li>
          </ul>
         </div>
         </div> : <div className="users">
         <NavLink className="changeton" to="/login">
         <p>Login</p>
         </NavLink>
         <p>|</p>
         <NavLink className="changeton" to="/Register">
         <p >Register</p>
         </NavLink>
       </div> 
        }
        
      </div>
    </div>
  );
      }
};
}
export default Header;
