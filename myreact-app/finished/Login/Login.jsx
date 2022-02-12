import React from "react";
class Login extends React.Component{
    state={
        email:"",
        password:""
    }
    updateHolder=(event)=>{
        this.setState({ [event.target.name]: event.target.value })
    }
    submitHandler=(event)=>{
        event.preventDefault()
        console.log(this.state);
    }
    render(){
        return<>
           <div className="container">
           <pre>{JSON.stringify(this.state)}</pre>
    <div className="row">
        <div className="col-md-6">
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label>Email : </label>
                    <input type="text" placeholder="Enter email" onChange={this.updateHolder}  name="email"/>
                    </div>
                    <div className="form-group">
                        <label>Password : </label>
                        <input type="password" placeholder="Enter password" onChange={this.updateHolder} name="password" />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-success" value="login" />

                </div>
            </form>
        </div>
    </div>
</div>
              
        </>
    }
}
export default Login;