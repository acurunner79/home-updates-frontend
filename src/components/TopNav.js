import React from "react";
import { Link } from "react-router-dom";
import '../styles/topnav.css'


const TopNav = () => {
    return (
        <nav id="top-navbar">
            <ul id="top-navbar-links-container">
                <Link to="/home"><li>Home</li></Link>
                <Link to="/dashboard"><li>Dashboard</li></Link>
            </ul>
        </nav>
    )
}

export default TopNav