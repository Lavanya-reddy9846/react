import React from "react";
import Axios from "axios"
class One extends React.Component{
    state={
        array:[]
    }
    componentDidMount=()=>{
        Axios.get("https://jsonplaceholder.typicode.com/albums").then((Lavi)=>{
            this.setState({array:Lavi.data})
        })
    }
    render(){
        return<>
        <pre>{JSON.stringify(this.state)}</pre>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <table className="table table-hover">
                    <thead>
                            <th>USERID</th>
                            <th>ID</th>
                            <th>TITLE</th>
                        </thead>
                        <tbody>
                         {this.state.array.map((hello)=>{
                             return<tr>
                                 <td>{hello.userId}</td>
                                 <td>{hello.id}</td>
                                 <td>{hello.title}</td>
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
export default One