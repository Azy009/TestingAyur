import React from 'react'
import img from "../assets/img/bg/breadcrmp.png"
const Pagebredcame = ({title,subtitle}) => {
  return (
    <div>
        <div className="bannerhere">
            <div className="bannerimg">
                <img src={img} alt="heresome" />
            </div>
            <div className="location">
                <p className='colorp'> <span style={{color:"#2A6233"}} className="fontwe">{title.toLowerCase()}</span></p>
                <p className='colorpad'> <span style={{color:"#2A6233"}} className="fontwed">{subtitle}</span></p>
            </div>
        </div>
        {/* <div className="info">
            <div className="infotitle">
                <h1>Welcome To Alista Store!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident ducimus id mollitia quisquam accusamus recusandae enim dolorem vitae laborum amet molestiae, molestias alias, neque impedit, assumenda corporis. Facere esse, error? Molestias explicabo voluptate, odit excepturi molestiae pariatur facilis facere, sunt laborum earum tenetur inventore! Error voluptatum iusto quidem officia, et omnis cupiditate rem, tenetur odit explicabo adipisci totam, eius?</p>
            </div>
        </div> */}
    </div>
  )
}

export default Pagebredcame