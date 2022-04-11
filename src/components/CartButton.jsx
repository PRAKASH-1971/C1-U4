import React,{ useState } from "react";
// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    const [count,setCount] = React.useState(1)

    const increment = (value) =>{
     setCount(count + value)
    }
    const decrement = (value) =>{
     setCount(count - value)
    }

  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div className="count">
      <button onClick={()=>decrement(1)}>-</button>
      <p className="count-item">{count}</p>
      <button onClick={()=>increment(1)}>+</button>
  </div>
  </>;
};
export default CartButton
