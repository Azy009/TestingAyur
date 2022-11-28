import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useGetFiveCateNameQuery } from "../services/apifile";

const Menu = () => {
const allcatename = useGetFiveCateNameQuery()
  const [hide, sethide] = useState(false);
 const [fix, setfixed] = useState(false);
 const superproduct = allcatename.data;
 if (allcatename.isLoading === true) {
   return <div></div>;
 } else {
  return (
    <div className="menuwidth">
      <ul className={fix ? 'stkiymenu ullist' : 'ullist'}>
       
      {superproduct.data[0].map((item) => (
        <li> <NavLink to={`/${item.menu_url}`} className="removest">{item.menu_title}</NavLink> </li>
        ))}
      </ul>
      <div className="menuicon">
        <p className="menutext">MENU</p>
        <p
          style={{
            margin: "0px",
          }}
          onClick={() => sethide(!hide)}
        >
          <i className="fa-solid fa-bars"></i>
        </p>
      </div>
      {hide ? (
        <div className="slidemenu">
          <div className="closebtnhere">
            <div className="closehere" onClick={() => sethide(!hide)}>
              <i className="fa-sharp fa-solid fa-xmark"></i>
            </div>
          </div>
          <div className="supermenu">
            <ul className="dropmenu">
            
              {superproduct.data[0].map((item) => (
              <li className="tab">
                <p style={{ margin: "0px" }}><NavLink to={`/${item.menu_url}`} className="removest">{item.menu_title}</NavLink></p>
              </li>
                ))}
              <li className="menubottom">
                <div className="split">
                  <div className="here">
                    <span style={{ padding: "2px 4px 0px 0px" }}>
                      <i className="fa-regular fa-envelope"></i>
                    </span>{" "}
                    <p className="givefontz">info@yourdomain.com</p>
                  </div>
                  <div className="sicons">
                    <ul>
                      <li className="facebook">
                        <div>
                          <i className="fa-brands fa-facebook-f"></i>
                        </div>
                      </li>
                      <li className="twitter">
                        <div>
                          <i className="fa-brands fa-twitter"></i>
                        </div>
                      </li>
                      <li className="pinterest">
                        <div>
                          <i className="fa-brands fa-pinterest-p"></i>
                        </div>
                      </li>
                      <li className="google-plus">
                        <div>
                          <i className="fa-brands fa-google-plus-g"></i>
                        </div>
                      </li>
                      <li className="linkedin">
                        <div>
                          <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
      }
};

export default Menu;
