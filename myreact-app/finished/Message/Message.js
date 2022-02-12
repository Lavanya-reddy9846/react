import React,  { Component }from "react"
class Message extends Component{
    state={
        Message:"hello"
    }
    gmHandler=()=>{
        this.setState({Message: "GoodMornig"});
    }
    gaHandler=()=>{
        this.setState({Message: "GoodAfternoon"});
    }
    gnHandler=()=>{
        this.setState({Message: "GoodNight"});
    }
    render(){
        return<>
        <h3>Message: {this.state.Message}</h3>
        <button onClick={this.gmHandler}>GM</button> 
      
        <button onClick ={this.gaHandler}>GA</button> 
        <button onClick={this.gnHandler}>GN</button> 
        </>
    }
}
export default Message