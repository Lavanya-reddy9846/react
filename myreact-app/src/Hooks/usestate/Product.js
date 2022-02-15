import React,{useState} from "react";
let Product=()=>{
    let[product,setProduct]=useState({
        name:"Bhuggatti",
        price:5000000,
        qty:1,
        img:"https://repairsmith-prod-wordpress.s3.amazonaws.com/2020/01/Bugatti-Chiron.jpg"
    
     })
     let incrHandler=()=>{
         setProduct({...product,qty:product.qty+1})
     }
     let decrHandler=()=>{
         setProduct({...product,qty:product.qty-1})
     }
     return<React.Fragment>
         <h3>Product Name:{product.name}</h3>
         <h3>Product price:{product.price}</h3>
         <h3>Total price: {product.price*product.qty}</h3>
         <h3>Image:<img src={product.img} alt="car" width="100px" height="100px"/></h3>
         <button onClick={decrHandler}>decr</button>
         <span>{product.qty}</span>
         <button onClick={incrHandler}>incr</button>
     </React.Fragment>
    }
export default Product