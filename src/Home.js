import React, { useEffect, useState } from 'react'
import Banner from "./component/Banner";
import Careofyou from "./component/Careofyou";
import Featured from "./component/Featured";
import Footer from "./component/Footer";
import Header from "./component/Header";
import HomeCategory from "./component/HomeCategory";
import Lastfooter from "./component/Lastfooter";
import Latestblog from "./component/Latestblog";
import Menu from "./component/Menu";
import OwlCar from "./component/OwlCar";
import Realcaretoyou from "./component/Realcaretoyou";
import Scrolltotop from './component/Scrolltotop';
import Socialmedia from './component/Socialmedia';
import { Helmet } from 'react-helmet';
import { getipToken, storeipToken } from './services/LocalStorageSrv';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const nvg = useNavigate()
  const userdata = () => {
    fetch(
      "https://geolocation-db.com/json/67273a00-5c4b-11ed-9204-d161c2da74ce"
    )
      .then((response) => response.json())
      .then((data) => storeipToken(data));
  };
  useEffect(() => {
    userdata();
  }, []);
if(getipToken('userip')){
    nvg("/")
  }else{
    console.log()
  }

  return (
    <div>
      
       <Socialmedia />
       <Helmet>
        <title>Home</title>
        <meta name='description' content='ayur home page' />
        <meta name='keywords' content='herbal product, body care, face care' />

       </Helmet>
      <Header />
      <Scrolltotop />
      <Menu />
      <OwlCar />
      <HomeCategory />
      <Featured />
      <Banner />
      <Latestblog />
      <Careofyou />
      <Realcaretoyou />
      <Footer />
      <Lastfooter />
       
    </div>
  )
}

export default Home