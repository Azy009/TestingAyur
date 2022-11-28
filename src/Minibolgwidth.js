import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getipToken, getToken, removecartToken, storecartToken } from './services/LocalStorageSrv'
const Minibolgwidth = ({ptitle, url, sellp, mrppr, prurl,productid}) => {
  const getuserip = getipToken()
  const [cartvalue,setcartvalue] = useState({})
  const submitlogin = (e) => {
    let person 
    const userdataed = getToken('data')
    if(getToken('data')){
      person = userdataed.user_id 
    }else{
      person = ""
    }
    
    const infodata = {
      userip: getuserip.IPv4,
      productid: productid,
      quantity: 1,
      userid: person
    }

    console.log("dddeeee",infodata)
    e.preventDefault();
      axios("https://ayuradmin.stackerbee.com/api/add-to-cart", {
        method: "POST",
        mode: "no-cors",
        data: JSON.stringify(infodata),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
      }).then((res) => setcartvalue(res));
  };
  return (
    <div className="featcomp2">
      <NavLink to={`/product-details/${prurl}`} className="changeton">
            <div className="imgcomp2">
              <img src={`https://ayuradmin.stackerbee.com/upload/product/${url}`} alt="showimg" />
            </div>
            </NavLink>
            <div className="compdetails">
              <div className="comppara">
                
                <NavLink to={`/product-details/${prurl}`} className="changeton" ><h4> {`${ptitle.substr(0,35)} ...`}</h4></NavLink>
              </div>
              <div className="price">
                <div className="pricehere">
                  <span className="pricewrite"> {`₹${mrppr}.00`}</span>
                </div>
               
              </div>
            {cartvalue.status == 200 ? (
            <div>
               {cartvalue.data.status == 1 ? 
                removecartToken('cart')
              : 
                <div></div>
              }
              {cartvalue.data.status == 1 ? 
                storecartToken(cartvalue.data.data[0].incart)
              : 
                <div></div>
              }
              { cartvalue.data.status === 1 ? window.location.reload(false) : <div></div>}
               
              {cartvalue.data.status == 0 ? 
                <div>{alert("something went wrong try again")}</div>
              : 
                <div></div>
              }
              { cartvalue.data.status === 0 ? window.location.reload(false) : <div></div>}
            </div>
          ) : (
            <div></div>
          )}
            <form onSubmit={submitlogin} >
              <div className="addtocarthere">
                <button type='submit'>Add To Cart</button>

              </div>
              </form>
            </div>
          </div>
  )
}

export default Minibolgwidth