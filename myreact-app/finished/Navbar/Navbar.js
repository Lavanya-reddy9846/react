import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <Link className="navbar-brand" to="contact"> React Contact App</Link>
                    
                    <Link to="contacts" className="nav-link">Contacts</Link>
                            
                </nav>

            </div>
        )
    }
}

export default Navbar