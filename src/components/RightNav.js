import React from "react";
import { Link } from "react-router-dom";
import '../styles/rightnav.css'



const RightNav = () => {

    return(
        <div>
            <nav>
                <ul>
                    <Link to="/home">
                        <li>Home</li>
                    </Link>
                    <Link to="/dashboard">
                        <li>Dashboard</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default RightNav