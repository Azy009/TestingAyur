import React, { useEffect, useState } from 'react'
import { HiChevronDoubleUp } from "react-icons/hi";
const Scrolltotop = () => {
    const [isvisable, setisvisable ] = useState(false);
    const goToBtn = () =>{
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    };
    const listentoscroll = () =>{
        let heighthidden = 240;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if(winScroll > heighthidden){
setisvisable(true)
        }else{
setisvisable(false)
            }
        }
    
    useEffect(()=>{
window.addEventListener('scroll',listentoscroll);
    }, []);
  return (
    <div>
    {isvisable && ( <div className='scrolltotop' onClick={goToBtn}>
    <h5><HiChevronDoubleUp color='white' /></h5>
</div>) }
</div>
  )
}

export default Scrolltotop