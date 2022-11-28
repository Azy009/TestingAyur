import React from 'react'
import img from '../assets/img/blog/blog1.jpg'
const Blogmiddle = () => {
  return (
    <div className='blogsection'>
        <div className="blogtop">
            <p>Posts by:admin  |  Mar102015</p>
        </div>
        <div className="blogmiddlesection">
            <div className="blogmiddleimg">
                <img src={img} alt="304" />
            </div>
            <div className="blogmiddledetails">
                <p className='bodyde'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis inventore are id cumque dolore, ex dolor unde iste sunt, eos amet maxime sit dolore tortor?</p>
                 <button className='blogbtn'>READ MORE</button>
                 <div className="sociali">
                    <h3>SHARE THIS POST</h3>
                    <p><i className="fa-brands fa-facebook-f"></i></p><p><i className="fa-brands fa-twitter"></i> </p>
                    <p><i className="fa-brands fa-pinterest"></i></p><p><i className="fa-brands fa-google-plus-g"></i></p>
                    <p><i className="fa-brands fa-linkedin-in"></i></p>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Blogmiddle