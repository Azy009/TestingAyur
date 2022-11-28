import React from "react";
import { useGetSocailMediaQuery } from "../services/apifile";

const Socialmedia = () => {
  const resp = useGetSocailMediaQuery();
  const superdata = resp.data;
  if (resp.isLoading === true) {
    return <div></div>;
  } else {
    return (
      <div id="socialarea">
        <ul id="sociallist">
          {superdata.data[0].facebook == 1 ? <a
          target="_blank"
            href={superdata.data[0].website_facebook}
            style={{ color: "#fff" }}
          >
            <li className="facebook_social">
              <p>
                <i className="fa-brands fa-facebook-f"></i>
              </p>
            </li>
          </a> : <div></div>}
          
          {superdata.data[0].twitter == 1 ? <a
          target="_blank" href={superdata.data[0].website_twitter} style={{ color: "#fff" }}>
            <li className="twitter_social">
              <p>
                <i className="fa-brands fa-twitter"></i>
              </p>
            </li>
          </a> : <div></div>}
          
          {superdata.data[0].instagram == 1 ? <a
          target="_blank"
            href={superdata.data[0].website_instagram}
            style={{ color: "#fff" }}
          >
            <li className="twitter_social">
              <p>
                <i className="fa-brands fa-instagram"></i>
              </p>
            </li>
          </a> : <div></div>}
          
          {superdata.data[0].youtube == 1 ? <a
          target="_blank" href={superdata.data[0].website_youtube} style={{ color: "#fff" }}>
            <li className="googleplus_social">
              <p>
                <i className="fa-brands fa-youtube"></i>
              </p>
            </li>
          </a> : <div></div>}
          
          {superdata.data[0].pinterest == 1 ? <a
          target="_blank"
            href={superdata.data[0].website_pinterest}
            style={{ color: "#fff" }}
          >
            <li className="pinterest_social">
              <p>
                <i className="fa-brands fa-pinterest-p"></i>
              </p>
            </li>
          </a> : <div></div>}
          
          {superdata.data[0].linkedin == 1 ?           <a
          target="_blank"
            href={superdata.data[0].website_linkedin}
            style={{ color: "#fff" }}
          >
            <li className="linkedin_social">
              <p>
                <i className="fa-brands fa-linkedin"></i>
              </p>
            </li>
          </a> : <div></div>}

        </ul>
      </div>
    );
  }
};
export default Socialmedia;
