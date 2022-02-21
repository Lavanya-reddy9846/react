import React,{useState} from "react";
let Productcopy=()=>{
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
         <div className="container">
             <div className="row">
                 <div className="col-md-8">
                     <table className="table table-hover bg-dark text-white">
                         <thead>
                             <th>Name</th>
                             <th>Price</th>
                             <th>Image</th>
                             <th>Qty</th>
                             <th>Total price</th>

                         </thead>
                         <tbody>
                             <tr>
                                 <td>{product.name}</td>
                                 <td>{product.price}</td>
                                 <td><img src={product.img}  alt="car" width="100px" height="100px"/></td>
                                 <td> <i class="fa fa-minus-circle" onClick={decrHandler}></i>
                                    {product.qty}
                                    <i class="fa fa-plus-circle" onClick={incrHandler}></i>
                                </td>
                                 <td>{product.price*product.qty}</td>
                             </tr>
                         </tbody>
                     </table>
                 </div>
             </div>
         </div>
          </React.Fragment>
        
    }
export default Productcopy