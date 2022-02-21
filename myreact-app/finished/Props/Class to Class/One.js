import React from "react"
import Two from "./Two"
class One extends React.Component{
    student_Name="Lavanya"
    student_Id="52"
    college="SGDC"
    render(){
        return<>
        <Two name={this.student_Name}
             id={this.student_Id}
             college={this.college}/>
        </>
    }
}
export default One 