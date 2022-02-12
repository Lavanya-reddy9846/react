import React from "react";
let Two=(props)=>{
    return<>
    <pre>{JSON.stringify(props)}</pre>
    <h2>name:{props.name}</h2>
    <h2>sal:{props.sal}</h2>
    </>
}
export default Two