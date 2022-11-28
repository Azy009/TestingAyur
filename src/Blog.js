import React from 'react'
import Footer from './component/Footer'
import Header from './component/Header'
import Lastfooter from './component/Lastfooter'
import Menu from './component/Menu'
import Pagebredcame from './component/Pagebredcame'
import Scrolltotop from './component/Scrolltotop'
import Socialmedia from './component/Socialmedia'
import { Helmet } from 'react-helmet'
import { useGetAllBlogsQuery } from './services/apifile'
import Minicareofyou from './component/Minicareofyou'
const Blog = () => {
  const blogs = useGetAllBlogsQuery()
  const superblog = blogs.data
if(blogs.isLoading === true){return<div></div>}else{
  return (
    <div>
      <Socialmedia />
      <Helmet>
        <title>Blog</title>
        <meta name='description' content='ayur blog page' />
        <meta name='keywords' content='herbal product, body care, face care' />
        
       </Helmet>
      <Header />
      <Scrolltotop/>
    <Menu />
   <Pagebredcame title="BLOG" />
   <div className="blogpage">
        {superblog.data[0].map((item)=>
        <div className='makewidth'>
          <Minicareofyou btitle={item.blog_title} url={item.image} bdate={item.date} pageurl={item.pg_url} bdesc={item.sort_description} />
            </div>
            )}
            </div>
    <Footer />
    <Lastfooter /></div>
  )
        }
}

export default Blog