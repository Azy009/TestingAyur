import React, { useEffect, useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Lastfooter from "./component/Lastfooter";
import Menu from "./component/Menu";
import Minibolgwidth from "./Minibolgwidth";
import Scrolltotop from "./component/Scrolltotop";
import Socialmedia from "./component/Socialmedia";
import Pagebredcame from "./component/Pagebredcame";
import { Helmet } from "react-helmet";
const Blogfullwidth = () => {
  const [showsun ,setshowsun] = useState([])
  const aboutdata = async() =>{
    const prodata = {
      category: 'sun-care'
    }
      const resp = await fetch(`https://ayuradmin.stackerbee.com/api/Category/${prodata.category}`);
      const data = await resp.json();
      setshowsun(data.data[0]);
  }
      useEffect(()=>{
          aboutdata();
      },[]);
     
      // console.log(showsun[0].product_title)

  return (
    <div>
      <Socialmedia />
      <Helmet>
        <title>blog full width</title>
        <meta name='description' content='ayur blog full width page' />
        <meta name='keywords' content='herbal product, body care, face care' />
        
       </Helmet>
      <Header />
      <Scrolltotop />
      <Menu />
      <Pagebredcame title="SCCESSORIES" />
      <div className="info">
            <div className="infotitle">
                <h1>Welcome To Alista Store!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident ducimus id mollitia quisquam accusamus recusandae enim dolorem vitae laborum amet molestiae, molestias alias, neque impedit, assumenda corporis. Facere esse, error? Molestias explicabo voluptate, odit excepturi molestiae pariatur facilis facere, sunt laborum earum tenetur inventore! Error voluptatum iusto quidem officia, et omnis cupiditate rem, tenetur odit explicabo adipisci totam, eius?</p>
            </div>
        </div>
      <div className="fullwidth">
        <div className="fulltitle">
          <p>SHOP</p>
        </div>
        <div className="fullmenu">
        <Minibolgwidth ptitle="product title" url={`57ea6f8655248ec512ba7b64eaee04db.jpg`} sellp={5} mrppr={231} />



        </div>
        <div className="blogpagintion">
            <ul className="pagesblo">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>next</li>
                <li>&gt;&gt;</li>
            </ul>
        </div>
      </div>

      <Footer />
      <Lastfooter />
    </div>
  );
};

export default Blogfullwidth;
