import React from "react";
import img from "../assets/img/icon/papyel.png";
const Lastfooter = () => {
  return (
    <div
      className="topborder"
    >
      <div className="lasttext">
        <div className="lastpara">
          <p>© Ayur Herbals | Website Developed By DMAS</p>
        </div>
        <div className="lastimg">
          <img src={img} alt="error" />
        </div>
      </div>
    </div>
  );
};

export default Lastfooter;
