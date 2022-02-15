import React,{useState} from "react"
let Login=()=>{
    let[login,setLogin]=useState({
        email:"",
        password:""
    })
    let updateHandler=(event)=>{
        setLogin({...login,email: event.target.value, password: event.target.value })
    }
    let submitHandler = (event) => {
        event.preventDefault()
        
    }
    return<React.Fragment>
                        <h1>Login Form</h1>
                <form onSubmit={submitHandler}>
                    <label> Email</label>
                    <input type="text" onChange={updateHandler} /> <br /><br />
                    <label> Password</label>
                    <input type="password" onChange={updateHandler} /><br /><br />
                    <input type="submit" />
                </form>
    </React.Fragment>
}
export default Login