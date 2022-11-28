import React from 'react'
import img2 from "../assets/img/product/product1.jpg";
const Tabledata = () => {
  return (
    <tr>
                <td className="hoveref">
                  <i className="fa-solid fa-trash-can"></i>
                </td>
                <td className="cartreimg">
                  <img src={img2} alt="eeid" />
                </td>
                <td>Handbag fringilla</td>
                <td>£65.00</td>
                <td>
                  <div className="editcart">
                    <p>Quantity</p>
                    <input type="text" name="" id="" value="1" />
                  </div>
                </td>
                <td>£130.00</td>
              </tr>
  )
}

export default Tabledata