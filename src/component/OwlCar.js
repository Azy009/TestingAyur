import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useGetBannerImgQuery } from "../services/apifile";
import AOS from 'aos';
import 'aos/dist/aos.css'
import "./Customowlforbanner.css";
const OwlCar = () => {
  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    animateOut:'fadeOut',
    nav: true,
    dots: false,
    margin: 0,
    responsive: {
      1100: {
        items: 1,
      },
      724: {
        items: 1,
      },
      500: {
        items: 1,
      },

      370: {
        items: 1,
      },
    },
  };
  useEffect(()=>{
 AOS.init({duration:1500})
  }, []);

 const resp = useGetBannerImgQuery()
  const superdata = resp.data
  if(resp.isLoading === true){return<div></div>}else{
  return (

    <div className="positionre">
      {/* <Carousel fade={true} className="owlwidth">
        <Carousel.Item interval={3000}>
          <img className="owlwidth" src={first} alt="First slide" />    
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="owlwidth" src={second} alt="Second slide" />
        </Carousel.Item>
      </Carousel> */}
       <OwlCarousel className="owl-theme" {...options}>
                  {/* <div className="homefrontbanner">
                    <img src={first} alt="304" />
                    <div className="frontintitle">
                                    <h1 data-aos="fade-down">maison Francis Kuja</h1>
                                    <p data-aos="fade-down" data-aos-delay={700}>Learn more about our product philosophy, and the benefits of microbiome-friendly skincare.</p>
                                    <span data-aos="zoom-in" data-aos-delay={1500} >shop now</span>
                    </div>
                  </div> */}
                    { resp.isLoading ? <div>  loading is here</div> :  superdata.data[0].map((item)=>
         <div className="homefrontbanner">
         <img src={`https://ayuradmin.stackerbee.com/upload/banner/${item.image}`} alt={item.banner_alt} />
       </div>
        )}
                  
                </OwlCarousel>
    </div>
  );
};
}
export default OwlCar;
