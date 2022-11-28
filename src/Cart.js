import React, { useEffect, useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Lastfooter from "./component/Lastfooter";
import Menu from "./component/Menu";
import Scrolltotop from "./component/Scrolltotop";
import Socialmedia from "./component/Socialmedia";
import Pagebredcame from "./component/Pagebredcame";
import { Helmet } from "react-helmet";
// import { useDeleteProductQuery, useGetAllCartProductQuery } from "./services/apifile";
import { getipToken, getToken, removecartToken, storecartToken } from "./services/LocalStorageSrv";
import axios from "axios";
const Cart = () => {
 const [checkded,setcheckded] = useState({})
  let person;
  const userdataed = getToken("data");
  if (getToken("data")) {
    person = userdataed.user_id;
  } else {
    person = 0;
  }
  const userpinfo = getipToken()

  const thisdata = {
    userip: userpinfo.IPv4,
    userid: person,
  };
  const [response, setresponse] = useState([]);

  const postspec = () => {
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
  };

  useEffect(() => {
      postspec();
  }, []);

  function Sandid(id){
    const delid = {
      tempid:id,
    }
    axios("https://ayuradmin.stackerbee.com/api/deletecart", {
      method: "POST",
      mode: "no-cors",
      data: JSON.stringify(delid),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    }).then((res) => {
      setcheckded(res)
    });

    
  }


  
  return (
    <div>
      <Socialmedia />
      <Helmet>
        <title>Cart</title>
        <meta name="description" content="ayur Cart page" />
        <meta name="keywords" content="herbal product, body care, face care" />
      </Helmet>
      <Header />
      <Scrolltotop />
      <Menu />
      <Pagebredcame title="CART PAGE" />

      <div className="cartsection">
        <div>
        </div>
        <div className="scrolltable">
          
          {checkded.status == 200 ? ( <div>{response.status == 200 ? (<div>{response.data.status === 1 ? storecartToken(response.data.incart) : <div></div>}</div>) : <div></div>}{checkded.data.status == 1 ? removecartToken('cart') : <div></div>}{checkded.data.status == 1 ? window.location.reload(false) : <div></div>}</div>) : <div></div>}
          {response.status == 200 ? (
            <table>
               <thead>
              <tr>
                <th>Delete</th>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
              {response.status == 200 ? (
                <tbody>
                  {" "}
                  {response.data.status == 1 ? response.data.data.map(item =>
                  <tr>
                  <td className="hoveref">
                    <button style={{border:"none"}} onClick={()=>Sandid(item.temp_id)}>
                    <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                  <td className="cartreimg">
                    <img src={`https://ayuradmin.stackerbee.com/upload/product/${item.image}`} alt="eeid" />
                  </td>
                  <td>{item.product_title}</td>
                  <td className="dafo">{`₹${item.price}.00`}</td>
                  <td>
                    <div className="editcart">
                      <p>Quantity</p>
                      <input type="text" name="" id="" value={item.quantity} />
                    </div>
                  </td>
                </tr>
                  )  : (
                    <tr>
                      <td colSpan={5}>
                        <p style={{margin:"0px",padding:"10px 0px"}}>No Items In Your Cart</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              ) : (
                <div></div>
              )}
            </table>
          ) : (
            <div></div>
          )}
        </div>
        <div className="coupen">
          <div className="coupen1">
            <div className="coupentitle">
              <p>COUPEN</p>
            </div>
            <div className="coupenpara">
              <p>Enter your coupon code if you have one.</p>
            </div>
            <div className="inorb">
              <input type="text" name="" id="" placeholder="coupen code" />
              <button className="updatecart">APPLY COUPON</button>
            </div>
          </div>
          <div className="coupen2">
            <div className="coupentitle">
              <p>CART TOTALS</p>
            </div>
            <div className="coupen2padd">
              <div className="coupen2para">
                <p>Subtotal</p>
              {response.status == 200 ? (<div>
                {response.data.status == 1 ? <p className="fofr" style={{fontFamily:"system-ui"}} >{`₹${response.data.subtotal}`}</p> : <div></div>}
              </div>) : <div></div>}
              
              </div>
              <div className="coupen2para">
                <p>Shipping</p>
                <p>
                  {" "}
                  <span style={{ paddingRight: "45px" }}>Flat Rate:</span>{" "}
                  £255.00
                </p>
              </div>
              <div className="coupen2paralast">
                <p>Calculate shipping</p>
              </div>
              <div className="coupen2para" style={{ paddingTop: "24px" }}>
                <p>Subtotal</p>
                <p>£215.00</p>
              </div>
              <div className="coupen2paralasted">
                <button className="updatecartined">Proceed To Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Lastfooter />
    </div>
  );
};
// };

export default Cart;
