import React from "react";
import Two from "./Two"
class One extends React.Component{
    Name="lavi"
    Sal=40000
    render(){
        return<>
        <Two name={this.Name} sal={this.Sal}/>
        </>
    }
}
export default One