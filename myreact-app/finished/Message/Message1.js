import React,  { Component }from "react"
class Message1 extends Component{
    state={
        Message:"hello",
        name:""
        
    }
    updateHandler=(value,name)=>{
           this.setState({Message: value,name : name})
    }
    
    render(){
        return<>
        <h3>Message: {this.state.Message}</h3>
        <h3>name: {this.state.name}</h3>
        <button onClick={this.updateHandler.bind(this,"GoodMorning","lavanya")}>GM</button> 
      
        <button onClick ={this.updateHandler.bind(this,"GoodAfetrnoon","")}>GA</button> 
        <button onClick={this.updateHandler.bind(this,"GoodNight","")}>GN</button> 
        </>
    }
}
export default Message1