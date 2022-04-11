import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"


const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
           {data.map((elem) => (
               <GroceryItem key={elem.id} elem={elem}/>
           ))}
            
        </div>
        </>
    )
}
export default GroceryDetails