import MiniCategory from "./MiniCategory";
import img20 from "../assets/img/bg/leaf.gif"
import { useGetAllCategoriesQuery } from "../services/apifile";
const HomeCategory = () => {
  const resp = useGetAllCategoriesQuery()
  const superdata = resp.data
if(resp.isLoading === true){return<div></div>}else{
  return (
    <div className="givecolor">
      <div className="categoryheading ">
        <h3>Category</h3>
        <div className="imgbottom">
          <img src={img20} alt="uyt" className="oror" />
        </div>
      </div>
      <div className="outercate">
        { resp.isLoading ? <div>  loading is here</div> :  superdata.data[0].map((item)=>
          <MiniCategory uniqe={item.product_cat_id} title={item.product_category} url={item.image1} linkgo={item.pg_url} />
        )}
      </div>
    </div>
  );
}
};

export default HomeCategory;
