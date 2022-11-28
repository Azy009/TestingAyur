import React from "react";
import { useNavigate } from "react-router-dom";
const MiniCategory = ({ title, url, linkgo,uniqe }) => {
  const navigate = useNavigate();
  const sandtolink = () =>{
    navigate(linkgo)
  }
  return (
    <div key={uniqe} className="categorypost" onClick={() => sandtolink()}>
      <div className="cateimg">
      <img src={`https://ayuradmin.stackerbee.com/upload/productcategory/${url}`} alt="brand" />
      </div>
      <div className="heading">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default MiniCategory;
