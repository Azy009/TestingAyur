import React from "react";
import { NavLink } from "react-router-dom";
import { FiEdit} from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { GoLocation } from "react-icons/go";
const Account1 = () => {
  return (
    <div>
      <h3 className="singingkunal">Dashboard </h3>
     <div className="dashinformation">
       <NavLink  to="accountup" style={{textDecoration:"none"}} >
       <div className="circledtl">
        <div className="circleicon">
        <FiEdit />
        </div>
        <div className="dtlname">
          <p>Edit your account information</p>
        </div>
       </div>
       </NavLink>
       <NavLink  to="accountpp" style={{textDecoration:"none"}} >
       <div className="circledtl">
        <div className="circleicon">
        <RiLockPasswordLine />
        </div>
        <div className="dtlname">
          <p>Change your password</p>
        </div>
       </div>
       </NavLink>
       <NavLink  to="accountup" style={{textDecoration:"none"}} >
       <div className="circledtl">
        <div className="circleicon">
        <GoLocation />
        </div>
        <div className="dtlname">
          <p>modify your address book entries</p>
        </div>
       </div>
       </NavLink>


     </div>
     {/* <div className="dashinformation" style={{padding:"18px 0px"}}>
       <NavLink  to="accountup" style={{textDecoration:"none"}} >
       <div className="circledtl">
        <div className="circleicon">
        <FiEdit />
        </div>
        <div className="dtlname">
          <p>Edit your account information</p>
        </div>
       </div>
       </NavLink>
       <NavLink  to="accountup" style={{textDecoration:"none"}} >
       <div className="circledtl">
        <div className="circleicon">
        <RiLockPasswordLine />
        </div>
        <div className="dtlname">
          <p>Change your password</p>
        </div>
       </div>
       </NavLink>
       <NavLink  to="accountup" style={{textDecoration:"none"}} >
       <div className="circledtl">
        <div className="circleicon">
        <GoLocation />
        </div>
        <div className="dtlname">
          <p>modify your address book entries</p>
        </div>
       </div>
       </NavLink>
     </div> */}
     
    </div>
  );
};

export default Account1;
