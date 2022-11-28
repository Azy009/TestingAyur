import React from "react";
import Minifeatired from "./Minifeatired";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useGetAllProductStatusQuery } from "../services/apifile";

const Related = () => {
  const options = {
    items:4,
    loop: true,
    autoplay: true, nav: true,
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
        items:1
      }
    }
  }
  const resp = useGetAllProductStatusQuery()
  const superdata = resp.data
  if(resp.isLoading === true){return<div></div>}else{
  return (
    <div className="marginvert" style={{backgroundColor:"#f2f2f2"}}>
      <div className="categoryheading">
        <h3>RELATED PRODUCTS</h3>
      </div>
      <div className="featuredcomps">
        <OwlCarousel className='owl-theme' {...options}>
          
        { resp.isLoading ? <div>  loading is here</div> :  superdata.data[0].map((item)=>  
          <Minifeatired  title={item.product_title}
          url={item.image}
          sellp={item.selling_price}
          mrppr={item.mrp_price}
          prurl={item.pg_url} 
          productid={item.product_id} />

        )}
          
        </OwlCarousel>
      </div>
    </div>
  );
};
}
export default Related;
