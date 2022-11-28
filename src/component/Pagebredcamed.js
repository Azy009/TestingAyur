import React from 'react'
import img from "../assets/img/bg/breadcrmp.png"
const Pagebredcamed = ({title}) => {
  return (
    <div>
        <div className="bannerhere" style={{backgroundColor:"#f2f2f2",height:"40px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            
                <p className='colorp' style={{margin:"0px",textAlign:"center",padding:"5PX"}}> <span style={{color:"#25330F",margin:"0px"}}> Home &gt;</span> <span style={{color:"#2A6233"}}>{title.toLowerCase()}</span></p>
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

export default Pagebredcamed