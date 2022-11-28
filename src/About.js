import React from 'react'
import Footer from './component/Footer'
import Header from './component/Header'
import Lastfooter from './component/Lastfooter'
import Menu from './component/Menu'
import Pagebredcame from './component/Pagebredcame'
import Scrolltotop from './component/Scrolltotop'
import Socialmedia from './component/Socialmedia'
import { Helmet } from 'react-helmet'
const About = () => {
  return (
    <div>
      <Socialmedia />
        <Header />
        <Helmet>
        <title>About</title>
        <meta name='description' content='ayur about page' />
        <meta name='keywords' content='herbal product, body care, face care' />
       </Helmet>
        <Scrolltotop />
        <Menu />
        <Pagebredcame title="About" />
        <Footer />
        <Lastfooter />
    </div>
  )
}

export default About