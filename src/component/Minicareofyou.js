import React from "react";
import { NavLink } from "react-router-dom";

const Minicareofyou = ({btitle,url,bdate,bdesc,pageurl}) => {
  return (
    <div className="sprea">
    <div className="imgsection">
    <NavLink to={`/blog-details/${pageurl}`} className="changeton">
      <div className="imgcare">
        <img src={`https://ayuradmin.stackerbee.com/upload/blog/${url}`} alt="error" />
      </div>
      </NavLink>
      <div className="paragrap">
    <NavLink to={`/blog-details/${pageurl}`} className="changeton">
        <h1 className="texthead">{btitle}</h1>
        </NavLink>
        <span className="boldtext">
          {/* June 28, 2019 <p className="inlinepara">ecommerce</p> */}
          {bdate}
        </span>
        <p className="careparagraph" dangerouslySetInnerHTML={{__html: bdesc}}>
          {/* {bdesc} */}
        </p>
    <NavLink to={`/blog-details/${pageurl}`} className="changeton">
        <p className="btnhere">Read more</p>
        </NavLink>
      </div>
    </div>
    </div>
  );
};

export default Minicareofyou;
