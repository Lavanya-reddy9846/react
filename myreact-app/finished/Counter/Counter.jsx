import React from "react";
class Counter extends React.Component{
    state={
        Counter:0
    }
    incrHandler=()=>{
        this.setState({Counter:this.state.Counter+1})
    }
    decrHandler=()=>{
        this.setState({Counter:this.state.Counter-1})
    }
    render(){
        return<>
        <h1>Counter:{this.state.Counter}</h1>
        <button onClick={this.decrHandler}>DECR</button>
        <button onClick={this.incrHandler}>INCR</button>
        </>
    }
}
export default Counter