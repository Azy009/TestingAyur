import Minicareofyou from "./Minicareofyou";
import OwlCarousel from 'react-owl-carousel';
import img20 from "../assets/img/bg/leaf.gif"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useGetAllBlogsQuery } from "../services/apifile";
const Careofyou = () => {
  const options = {
    items:3,
    loop: true,
    autoplay: false, nav: true,
    dots:false,
    margin: 16,
    responsive:{
      920:{
        items:3
      },
      524:{
        items:2
      },
      300:{
        items:1
      },

      310:{
        items:1
      }
    }
  }
  const blogs = useGetAllBlogsQuery()
  const superblog = blogs.data
if(blogs.isLoading === true){return<div></div>}else{
  return (
    <div className="marginvert backgroundweb">
      <div className="categoryheading">
        <h3>LATEST BLOG</h3>
        <div className="imgbottom">
          <img src={img20} alt="uyt" className="oror" />
        </div>
      </div>
      <div className="careofyoucomps">
        <OwlCarousel className='owl-theme' {...options}>
          
        {superblog.data[0].map((item)=>
          <Minicareofyou btitle={item.blog_title} url={item.image} bdate={item.date} pageurl={item.pg_url} bdesc={item.sort_description} />
            )}
      
      </OwlCarousel>

      </div>
    </div>
  );
};
}
export default Careofyou;
