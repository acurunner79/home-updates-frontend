import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import '../styles/form.css'


const CreateProjectForm = () => {
    return(
        <Layout>
            <h1 id="form-header">New Project</h1>
            <div>
                <form id="form-card">
                    <h2>Location</h2>
                    <input className="form-input"/>
                    <h2>Project Details</h2>
                    <input className="form-input"/>
                    <input className="form-input"/>
                    <input className="form-input"/>
                    <input className="form-input"/>
                    <input className="form-input"/>
                    <input className="form-input"/>
                    <input className="form-input"/>
                    <input className="form-input"/>
                    <input className="form-input"/>
                    <input className="form-input"/>
                    <input className="form-input"/>
                    <input className="form-input"/>
                    <input className="form-input"/>
                    <input className="form-input"/>
                    <input className="form-input"/>
                    <input className="form-input"/>
                    <input className="form-input"/>
                </form>
                <Link to="/">Back to Home</Link>
            </div>
        </Layout>
    )
}

export default CreateProjectForm