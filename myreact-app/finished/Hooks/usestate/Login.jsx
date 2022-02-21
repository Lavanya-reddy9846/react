import React,{useState} from "react"
let Login=()=>{
    let[login,setLogin]=useState({
        email:"jbvczsdfg@df",
        password:""
    })
    let updateHanlder=(event)=>{
        setLogin({...login,[event.target.name]:event.target.value})
    }
    let submitHandler = (event) => {
        event.preventDefault()
        console.log(login)
        
    }
    return<React.Fragment>
              <div className="container mt-5">
                    <pre>{JSON.stringify(login)}</pre>
                    <div className="row">

                        <div className="col-md-5">
                            <form onSubmit={submitHandler}>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Email" name="email" onChange={updateHanlder} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" name="password" onChange={updateHanlder} />
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btn btn-success" value="login"  />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

    </React.Fragment>
}
export default Login