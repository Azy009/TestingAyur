// import React, { useEffect } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Lastfooter from "./component/Lastfooter";
import Menu from "./component/Menu";
import { useEffect, useState } from "react";
import Scrolltotop from "./component/Scrolltotop";
import Socialmedia from "./component/Socialmedia";
import Pagebredcame from "./component/Pagebredcame";
import { Helmet } from "react-helmet";
const Faq = () => {
      const aboutdata = async() =>{
      const prodata = {
        category: 'sun-care'
      }
        const resp = await fetch(`https://ayuradmin.stackerbee.com/api/Category/${prodata.category}`);
        const data = await resp.json();
        console.log(data);
    }
        useEffect(()=>{
            aboutdata();
        },[]);
  const [outline, setoutline] = useState(true);
  const [change, setchange] = useState(true);
  const [id3outline, setid3outline] = useState(true);
  const [id4outline, setid4outline] = useState(true);
  const [id5outline, setid5outline] = useState(true);
  const [id6outline, setid6outline] = useState(true);


  return (
    <div>
      <Socialmedia />
      <Helmet>
        <title>Faq</title>
        <meta name='description' content='ayur faq page' />
        <meta name='keywords' content='herbal product, body care, face care' />
        
       </Helmet>
      <Header />
      <Scrolltotop />
      <Menu />
      <Pagebredcame title="FAQ" />
      <div className="middlefaq">
        <div className="faq1">
          <p>
            Below are frequently asked questions, you may find the answer for
            yourself
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
            erat sagittis, faucibus metus malesuada, eleifend turpis. Mauris
            semper augue id nisl aliquet, a porta lectus mattis. Nulla at tortor
            augue. In eget enim diam. Donec gravida tortor sem, ac fermentum
            nibh rutrum sit amet. Nulla convallis mauris vitae congue consequat.
            Donec interdum nunc purus, vitae vulputate arcu fringilla quis.
            Vivamus iaculis euismod dui.
          </p>
        </div>
        <div className="designhere">
          <div className="stylebox">
            <label
              htmlFor="checked"
              className={outline ? "aroundbd" : "change"}
              onClick={() => setoutline(!outline)}
            >
              Mauris congue euismod purus at semper. Morbi et valutate massa?
            </label>
            <input
              type="checkbox"
              name="check"
              id="checked"
              className="touchbtn"
            />
            <div className="answer">
              <p style={{ margin: "0px" }}>
                Donec mattis finibus elit ut tristique. Nullam tempus nunc eget
                arcu vulputate, eu porttitor tellus commodo. Aliquam erat
                volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi
                gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
              </p>
            </div>
          </div>
          <div className="stylebox">
            <label
              htmlFor="opbro"
              className={change ? "aroundbd" : "change"}
              onClick={() => setchange(!change)}
            >
              Mauris congue euismod purus at semper. Morbi et valutate massa?
            </label>
            <input
              type="checkbox"
              name="check"
              id="opbro"
              className="touchbtn"
            />
            <div className="answer">
              <p style={{ margin: "0px" }}>
                Donec mattis finibus elit ut tristique. Nullam tempus nunc eget
                arcu vulputate, eu porttitor tellus commodo. Aliquam erat
                volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi
                gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
              </p>
            </div>
          </div>
          <div className="stylebox">
            <label
              htmlFor="dublechecked"
              className={id3outline ? "aroundbd" : "change"}
              onClick={() => setid3outline(!id3outline)}
            >
              Mauris congue euismod purus at semper. Morbi et valutate massa?
            </label>
            <input
              type="checkbox"
              name="check"
              id="dublechecked"
              className="touchbtn"
            />
            <div className="answer">
              <p style={{ margin: "0px" }}>
                Donec mattis finibus elit ut tristique. Nullam tempus nunc eget
                arcu vulputate, eu porttitor tellus commodo. Aliquam erat
                volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi
                gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
              </p>
            </div>
          </div>
          <div className="stylebox">
            <label
              htmlFor="checkeded"
              className={id4outline ? "aroundbd" : "change"}
              onClick={() => setid4outline(!id4outline)}
            >
              Mauris congue euismod purus at semper. Morbi et valutate massa?
            </label>
            <input
              type="checkbox"
              name="check"
              id="checkeded"
              className="touchbtn"
            />
            <div className="answer">
              <p style={{ margin: "0px" }}>
                Donec mattis finibus elit ut tristique. Nullam tempus nunc eget
                arcu vulputate, eu porttitor tellus commodo. Aliquam erat
                volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi
                gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
              </p>
            </div>
          </div>
          <div className="stylebox">
            <label
              htmlFor="clot"
              className={id6outline ? "aroundbd" : "change"}
              onClick={() => setid6outline(!id6outline)}
            >
              Mauris congue euismod purus at semper. Morbi et valutate massa?
            </label>
            <input
              type="checkbox"
              name="check"
              id="clot"
              className="touchbtn"
            />
            <div className="answer">
              <p style={{ margin: "0px" }}>
                Donec mattis finibus elit ut tristique. Nullam tempus nunc eget
                arcu vulputate, eu porttitor tellus commodo. Aliquam erat
                volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi
                gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
              </p>
            </div>
          </div>
          <div className="stylebox">
            <label
              htmlFor="checking"
              className={id5outline ? "aroundbd" : "change"}
              onClick={() => setid5outline(!id5outline)}
            >
              Mauris congue euismod purus at semper. Morbi et valutate massa?
            </label>
            <input
              type="checkbox"
              name="check"
              id="checking"
              className="touchbtn"
            />
            <div className="answer">
              <p style={{ margin: "0px" }}>
                Donec mattis finibus elit ut tristique. Nullam tempus nunc eget
                arcu vulputate, eu porttitor tellus commodo. Aliquam erat
                volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi
                gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
              </p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
      <Lastfooter />
    </div>
  );
};

export default Faq;
