import React from "react";
import img20 from "../assets/img/bg/leaf.gif"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Minifeatired from "./Minifeatired";
import { useGetAllProductStatusQuery } from "../services/apifile";

const Latestblog = () => {
  const options = {
    items:4,
    loop: true,
    autoplay: false, nav: true,
    dots:false,
    margin: 0,
    responsive:{
      1100:{
        items:4
      },
      724:{
        items:3
      },
      500:{
        items:2
      },

      310:{
        items:1,
        nav: false,
      }
    }
  }
  const resp = useGetAllProductStatusQuery()
  const superdata = resp.data
  if(resp.isLoading === true){return<div></div>}else{
  return (
    <div className="marginvert">
      <div className="categoryheading">
        <h3>BEST SELLERS</h3>
        
        <div className="imgbottom">
          <img src={img20} alt="uyt" className="oror" />
        </div>
      </div>
      <div className="featuredcomps">
        <OwlCarousel className='owl-theme' {...options}>
          
        { resp.isLoading ? <div>  loading is here</div> :  superdata.data[0].map((item)=>  
          <Minifeatired  title={item.product_title}
          url={item.image}
          sellp={item.selling_price}
          mrppr={item.mrp_price}
          prurl={item.pg_url} 
          productid={item.product_id}
          />
        )}
        </OwlCarousel>
      </div>
     
    </div>
  );
};
}
export default Latestblog;
