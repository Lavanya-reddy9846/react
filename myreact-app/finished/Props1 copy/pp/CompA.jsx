import CompB from "./CompB"
let CompA=()=>{
    let a=100
    let size=[12,23,34]
    let details={name:"lavi",sal:50000}
    return<>
    <h2>component A</h2>
    <hr/>
    <CompB One={"Good Morning"}Two={a} Three={size} four={details}/>
    </>
}
export default CompA