import React from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Lastfooter from "./component/Lastfooter";
import Menu from "./component/Menu";
import img3 from "./assets/img/blog/comment3.png.jpg";
import Scrolltotop from "./component/Scrolltotop";
import Socialmedia from "./component/Socialmedia";
import Pagebredcame from "./component/Pagebredcame";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "./services/apifile";
const Blogdetails = () => {
  const {name} = useParams()
 const resp = useGetSingleBlogQuery(name)
 const superdata = resp.data
 if(resp.isLoading === true){return<div></div>}else{
  return (
    <div>
      <Socialmedia />
      <Helmet>
        <title>Blog Details</title>
        <meta name='description' content='ayur blog details page' />
        <meta name='keywords' content='herbal product, body care, face care' />
        
       </Helmet>
      <Header />
      <Scrolltotop />
      <Menu />
      <Pagebredcame title={superdata.data[0].blog_title} />
      <div className="blogdtl">
        <div className="firstline">
          <p>{superdata.data[0].blog_title}</p>
        </div>
        <div className="secondline">Posts by : admin | {superdata.data[0].date}</div>
        <div className="blogdbanner">
          <img src={`https://ayuradmin.stackerbee.com/upload/blog/${superdata.data[0].image}`} alt="" />
        </div>
        <div className="post_content">
          <p dangerouslySetInnerHTML={{__html: superdata.data[0].description}}>
          </p>
        </div>
        <div className="commentsection">
          <div className="commentheading">
            <h3>3 COMMENTS </h3>
          </div>
          <div className="commentbody">
            <div className="commentimg">
              <img src={img3} alt="304" />
            </div>
            <div className="commenthere">
              <div className="comment_meta">
                <h5>Admin</h5>
                <span>October 16, 2018 at 1:38 am</span>
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure
                </p>
              </div>
              <div className="comment_reply">
                <button className="updatecart">Reply</button>
              </div>
            </div>
          </div>
          <div className="commentbody">
            <div className="commentimg">
              <img src={img3} alt="304" />
            </div>
            <div className="commenthere">
              <div className="comment_meta">
                <h5>Admin</h5>
                <span>October 16, 2018 at 1:38 am</span>
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure
                </p>
              </div>
              <div className="comment_reply">
                <button className="updatecart">Reply</button>
              </div>
            </div>
          </div>
          <div className="commentbody">
            <div className="commentimg">
              <img src={img3} alt="304" />
            </div>
            <div className="commenthere">
              <div className="comment_meta">
                <h5>Admin</h5>
                <span>October 16, 2018 at 1:38 am</span>
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure
                </p>
              </div>
              <div className="comment_reply">
                <button className="updatecart">Reply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Lastfooter />
    </div>
  );
};
}
export default Blogdetails;
