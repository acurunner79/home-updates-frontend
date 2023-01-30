import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";


const HomePage = () => {

    return (
        <Layout>
            <h1>Home Page</h1>
                <Link to="/dashboard">Go to Dashboard</Link>
                {/* <button>Go to Dashboard</button> */}
        </Layout>
    )
}

export default HomePage