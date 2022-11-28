import Footer from "./component/Footer";
import Header from "./component/Header";
import Lastfooter from "./component/Lastfooter";
import Menu from "./component/Menu";
import "./component/Customowlforcate.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Related from "./component/Related";
import Scrolltotop from "./component/Scrolltotop";
import Socialmedia from "./component/Socialmedia";
import Pagebredcamed from "./component/Pagebredcamed";
import ReactImageMagnify from 'react-image-magnify';
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useGetSingleproductQuery } from "./services/apifile";
import { useState } from "react";
import { getipToken, getToken, storepidToken, getprodidToken, removeprodidToken } from "./services/LocalStorageSrv";
import axios from "axios";
const Productdtls = () => {
  const [qut, setqut] = useState(1)
  const {name} = useParams()
  const addnumber = () =>{
    setqut(parseInt(qut) + 1)
  }
  const subnumber = () =>{
    if(qut >= 2  ){
      setqut(parseInt(qut) - 1)
    }else{
    }
  }
const resp = useGetSingleproductQuery(name)
const showsun = resp.data
console.log("swswsws",resp)
let idvalue
if(resp.isLoading === false){
console.log("ffkkfjdjcss",showsun)
let idvalue = showsun.data[0].product_id
}
const getuserip = getipToken('userip')
  const [cartvalue,setcartvalue] = useState({})
  const submitlogin = (e) => {
    let person 
    const userdataed = getToken('data')
    if(getToken('data')){
      person = userdataed.user_id 
    }else{
      person = ""
    }
    const prodido = getprodidToken('prodid') 
    const infodata = {
      userip: getuserip.IPv4,
      productid: prodido,
      quantity: qut,
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

if(resp.isLoading === true){return<div></div>}else{
  return (
    <div>
      <Socialmedia />
      <Helmet>
        <title>product details</title>
        <meta name='description' content='ayur product details page' />
        <meta name='keywords' content='herbal product, body care, face care' />
        
       </Helmet>
      <Header />
      <Scrolltotop />
      <Menu />
      {cartvalue.status == 200 ? (
            <div>
              { cartvalue.data.status === 1 ? window.location.reload(false) : <div></div>}
            </div>
          ) : (
            <div></div>
          )}
      <Pagebredcamed title={showsun.data[0].product_title} />
      {resp.isLoading === false ? removeprodidToken('prodid'): <div></div> }
      {resp.isLoading === false ? storepidToken(showsun.data[0].product_id): <div></div> }
      {/* {resp.isLoading === false ? (<div>{showsun.status == "success" ? window.location.reload(false) : <div></div> }</div>): <div></div> } */}

      <div className="productbody">
        <div className="productdivide">
          <div className="productimghere">
            <div className="productlargeimg">
            <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: `https://ayuradmin.stackerbee.com/upload/product/${showsun.data[0].image}`
    },
    largeImage: {
        src: `https://ayuradmin.stackerbee.com/upload/product/${showsun.data[0].image}`,
        width: 1200,
        height: 1800
    }
}} />
            </div>
            <div className="extrahere">
              <div className="productowl">
              
                  <div className="imgprdsection">
                    <img src={`https://ayuradmin.stackerbee.com/upload/product/${showsun.data[0].image1}`} alt="304" />
                  </div>
                  <div className="imgprdsection">
                    <img src={`https://ayuradmin.stackerbee.com/upload/product/${showsun.data[0].image2}`} alt="304" />
                  </div>
                  <div className="imgprdsection">
                    <img src={`https://ayuradmin.stackerbee.com/upload/product/${showsun.data[0].image3}`} alt="304" />
                  </div>
                  <div className="imgprdsection">
                    <img src={`https://ayuradmin.stackerbee.com/upload/product/${showsun.data[0].image4}`} alt="304" />
                  </div>
                  <div className="imgprdsection">
                    <img src={`https://ayuradmin.stackerbee.com/upload/product/${showsun.data[0].image5}`} alt="304" />
                  </div>
              
              </div>
            </div>
          </div>
          <div className="productdesc">
            <h1>{showsun.data[0].product_title}</h1>
            <div className="price" style={{justifyContent:"START"}} >
                <div className="pricehere">
                  <span className="pricewrite"> {`₹${showsun.data[0].mrp_price}.00`}</span>
                </div>
               
              </div>
            
            <div className="addtoproduct">
            <div className="descriptionhere">
           <div dangerouslySetInnerHTML={{__html: showsun.data[0].sort_description}}></div>
          </div>
          <p style={{margin:"0px"}}>
              {/* {showsun.description} */}
            </p>
            <div className="editcartgo">
              <label htmlFor="gord">Quantity</label>
              <button onClick={subnumber} className="changenumber" ><span>-</span></button>
              <input type="text" id="gord" value={qut} max={9} min={1} readOnly onChange={(e) =>{setqut(e.target.value.replace(/[^1-9]/ig,''))}} />
              <button onClick={addnumber} className="changenumber" ><span>+</span></button>
            </div>
            <form onSubmit={submitlogin} >
            <div className="addtocarthered">
                <button type="submit">Add To Cart</button>
              </div>
              </form>
            </div>
          </div>
          
        </div>
        <div className="productwhite">
          <div className="middleproduct">
            <p>DESCRIPTION</p>
          </div>
          <div className="descriptionhere">
           <div dangerouslySetInnerHTML={{__html: showsun.data[0].description}}></div>
          </div>
        </div>
      </div>
      <Related />
      <Footer />
      <Lastfooter />
    </div>
  );
};
}
export default Productdtls;
