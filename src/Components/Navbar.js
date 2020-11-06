import React from "react"
import { NavLink } from "react-router-dom"
// import AboutUs from "./AboutUs"

function Navbar(){
    return(
        <nav>
            <h1>React lil playlist</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="AboutUs.js">About Us</NavLink>
        </nav>
    )
}

export default Navbar