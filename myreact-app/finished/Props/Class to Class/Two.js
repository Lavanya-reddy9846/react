import React from "react"
class Two extends React.Component{
    render(){
        return<>
        <pre>{JSON.stringify(this.props)}</pre>
        <h3> Name:{this.props.name}</h3>
        <h3> Id:{this.props.id}</h3>
        <h3>college:{this.props.college}</h3>
        </>
    }
}
export default Two