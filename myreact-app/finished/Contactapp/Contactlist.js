import React from "react";
class Contactlist extends React.Component{
   render(){
       return <>
         <pre>{JSON.stringify(this.props)}</pre>
         <h2>contactlist</h2>
         <div className="container">
             <div className="row">
                 <div className="col-md-8">
                     <table className="table table-hover">
                         <thead className="bg-dark text-white">
                             <tr>
                                 <th>ID</th>
                                 <th>UserId</th>
                                 <th>Title</th>
                             </tr>
                         </thead>
                         <tbody className="bg-warning">
                             {this.props.chandu.map((dhana)=>{
                                 return<tr>
                                     <td>{dhana.id}</td>
                                     <td>{dhana.userId}</td>
                                     <td>{dhana.title}</td>
                                 </tr>
                             })}
                         </tbody>
                     </table>
                 </div>
             </div>
         </div>
       </>
   }
}
export default Contactlist