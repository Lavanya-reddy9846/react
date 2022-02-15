let CompB=(props)=>{
    return<>
    <h3>Component B</h3>
    <pre>{JSON.stringify(props)}</pre>
    <h3>name= {props.four.name}</h3>
    </>
} 
export default CompB
