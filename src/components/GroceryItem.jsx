// reusable card component
import React from "react";
import CartButton from "./CartButton.jsx"

const GroceryItem = (props) => {
  console.log("mapped")
  return (
  <div className="card">
    <img src={props.elem.imgURL} alt="" />
    <h5>{props.elem.title}</h5>
    <div className="rates">
    <p>{props.elem.mrp}</p>
    <del>{props.elem.sellingPrice}</del>
    </div>
    <h4>{props.elem.discount}</h4>
    <CartButton/>
  </div>
  )
};
export default GroceryItem;
