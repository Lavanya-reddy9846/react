import React from "react";
class Cart extends React.Component{
    state={
        Brand:"Timex",
        Image:"https://watchesprime.com/wp-content/uploads/2019/01/IMG_9294.jpg",
        Qty:1,
        Price:3024
    }
    decrHandler=()=>{
        this.setState({Qty:this.state.Qty-1})
    }
    incrHandler=()=>{
        this.setState({Qty:this.state.Qty+1})
    }
    render(){
        return<>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="table table-hover">
                        <thead>
                            <th>Brand</th>
                            <th>Image</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total Amount</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.Brand}</td>
                                <td><img src={this.state.Image} alt="" height="100px" width="100px"/></td>
                                <td>
                                    <button className="fa fa-minus-circle" onClick={this.decrHandler}></button>
                                    {this.state.Qty}
                                    <button className="fa fa-plus-circle" onClick={this.incrHandler}></button>
                                </td>
                                <td>{this.state.Price}</td>
                                <td>{this.state.Qty*this.state.Price}</td>
                            </tr>
                        </tbody>
                    </div>
                </div>
            </div>
        </div>
        </>
    }
}
export default Cart