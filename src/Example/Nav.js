import React from 'react'
import './Nav.scss'
import {Link, NavLink} from "react-router-dom";

class Nav extends React.Component{

    render(){
        return(
            <>
               <div className="topnav">
                <a className="active" href = "/">Home</a>
                <a href="/outputting-list">List</a>
                <a href = "/users">Users</a>

                {/* <NavLink activeClassName="active" to="/" exact={true}>Home</NavLink>
                <NavLink to="/Outputting-list" activeClassName="active">OutputtingList</NavLink>
                <NavLink to="/Contact" activeClassName="active">Contact</NavLink>
                <NavLink to="/About" activeClassName="active">About</NavLink>
                <NavLink to="/Users" activeClassName="active">Users</NavLink> */}
                </div> 
            </>
        )
    }
}

export default Nav;