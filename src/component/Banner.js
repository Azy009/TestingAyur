import React from "react";
import { NavLink } from "react-router-dom";
import { useGetspecialofferinfoQuery } from "../services/apifile";
const Banner = () => {
  const resp = useGetspecialofferinfoQuery()
  const superdata = resp.data
  if(resp.isLoading === true){return<div></div>}else{
  return (
   <div>
     { resp.isLoading ? <div>  loading is here</div> :  superdata.data[0].map((item)=>
    <div className="displaybanner">
      <NavLink to={item.banner_link}>
      <img src={`https://ayuradmin.stackerbee.com/upload/banner/${item.image}`} alt="test" className="bannerde" />
      </NavLink>
    </div>
    )}
   </div>
  );
  }
};

export default Banner;
