import React from "react";
import {Link} from "react-router-dom"
let Nav=()=>{
    return<>
    <nav className="navbar navbar-expand-sm bg-danger">
        <Link className="navbar navbar-brand  text-dark h3" to="Home" >Axios Example</Link>
        <Link className="nav justify-content-center text-primary h2" to="DATA">DATA</Link>
    </nav>
    </>

}
export default Nav