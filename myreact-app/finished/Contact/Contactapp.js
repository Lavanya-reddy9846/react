import Axios  from "axios";
import React from "react"
class Contactapp extends React.Component{
    constructor(props){
        super(props);
        this.state={
          Contacts:[]
        }
    }

    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/albums").then((response)=>{this.setState({Contacts:response.data})})


        }

    
    render(){
        return<>
        <h2>Contactapp</h2>
        <pre>{JSON.stringify(this.state)}</pre>
      
       </>
   }
    
}
export default Contactapp