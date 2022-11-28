import React, { useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Menu from "./component/Menu";
import Lastfooter from "./component/Lastfooter";
import Scrolltotop from "./component/Scrolltotop";
import Socialmedia from "./component/Socialmedia";
import Pagebredcame from "./component/Pagebredcame";
import { Helmet } from "react-helmet";
import axios from "axios";

const Contact = () => {

  const [cname, setcname] = useState();
  const [cemail, setcemail] = useState();
  const [cphone, setcphone] = useState();
  const [response, setresponse] = useState({});
  const [cmessage, setcmessage] = useState();
  const [inputs, setinputs] = useState({});

  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinputs((values) => ({ ...values, [name]: value }));
  };
  const submitform = (e) =>{
  e.preventDefault()

axios("https://ayuradmin.stackerbee.com/api/contactform", {
  method: "POST",
  mode: "no-cors",
  data: JSON.stringify(inputs),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    "Accept": "application/json",
  },
}).then((res) => {
  setresponse(res);
});


  }
  return (
    <div>
      <Socialmedia />
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="ayur Contact us page" />
        <meta name="keywords" content="herbal product, body care, face care" />
      </Helmet>
      <Header />
      <Scrolltotop />
      <Menu />
      <Pagebredcame title="CONTACT US" />
      <div className="contacthere">
        <div className="contactleft">
          <h3>Contact Us</h3>
          <p className="clp">
            Claritas est etiam processus dynamicus, qui sequitur mutationem
            consuetudium lectorum. Mirum est notare quam littera gothica, quam
            nunc putamus parum claram anteposuerit litterarum formas human. qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam
          </p>
          <div className="clip">
          {response.status === 200 ? (
            <div>
              {response.data.status === 'success' ? 
                alert("successful add")
              : 
                alert("someting went wrong")
              }
              { response.data.status === 'success' ? window.location.reload(false) : <div></div>}
            </div>
          ) : (
            <div></div>
          )}
         
            {" "}
            <i className="fa-solid fa-fax"></i>{" "}
            <p>Address : No 40 Baria Sreet 133/2 NewYork City</p>
          </div>
          <div className="clip">
            {" "}
            <i className="fa-solid fa-phone"></i> <p> Infor@roadthemes.com</p>
          </div>
          <div className="clip">
            {" "}
            <i className="fa-regular fa-envelope"></i> <p> 0(1234) 567 890</p>
          </div>
        </div>
        <div className="contactright">
          <div className="div1">
            <h3>Tell Us Your Project</h3>
          </div>
          <form onSubmit={(e)=>submitform(e)}>
          <div className="div2">
            <label htmlFor="name">
              <p>Your Name (required)</p>
            </label>
            <input
              type="text"
              name="cname"
              id="name"
              value={cname}
              placeholder="Name *"
              required
              onChange={(e) => {setcname(e.target.value.replace(/[^a-zA-Z]/ig,'')); handlechange(e);}}
            />

          </div>
          <div className="div3">
            <label htmlFor="email">
              <p>Your Email (required)</p>
            </label>
            <input
              type="email"
              name="cemail"
              value={cemail}
              id="email"
              onChange={(e) => {setcemail(e.target.value);handlechange(e);}}
              placeholder="Email *"
              required
            />
          </div>
          <div className="div3">
            <label htmlFor="Phone">
              <p> Phone </p>
            </label>
            <input
              type="Phone"
              name="cphone"
              id="Phone"
              maxLength={10}
              minLength={10}
              value={cphone}
              placeholder="Phone *"
              required
              onChange={(e) => {setcphone(e.target.value.replace(/[^0-9]/ig,''));handlechange(e);}}
            />
          </div>
          <div className="div4">
            <label htmlFor="msg">
              <p>Your Message </p>
            </label>
            <textarea
              name="cmessage"
              id="msg"
              cols="77"
              rows="6"
              value={cmessage}
              placeholder="Message *"
              onChange={(e) => {setcmessage(e.target.value); handlechange(e);}}
              required
            ></textarea>
          </div>
          <div className="contactbtn">
            <button type="submit"
              
            >
              Send
            </button>
          </div>
          </form>
        </div>
      </div>
      <Footer />
      <Lastfooter />
    </div>
  );
};

export default Contact;
