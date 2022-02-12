import React from "react"
import Axios from "axios"
import Contactlist from "./Contactlist"
class Contactapp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contacts:[]
        }
    }
    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/albums").then((lava)=>{this.setState({contacts:lava.data})})
    }
    render(){
        return<>
         <h2>Contactapp</h2>
         <pre>{JSON.stringify(this.state)}</pre>
        <div className="container">
        <div className="row">
        <div className="col-md-8">
              <Contactlist chandu={this.state.contacts}/>
            </div>
            
            </div> 
        </div>
        </>
    }
}
export default Contactapp