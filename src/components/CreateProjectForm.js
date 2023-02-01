import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { useAppState } from "../AppState";
import '../styles/form.css'


const CreateProjectForm = (props) => {
    
    const { dispatch } = useAppState
    // console.log('props', dispatch)

    const [formData, setFormData] = useState(null)

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // dispatch(actions[type])
    }

    return(
        <Layout>
            <h1 id="form-header">New Project</h1>
            <div>
                <form onSubmit={handleSubmit} id="form-card">
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
                    <button>Create</button>
                </form>
                <Link to="/">Back to Home</Link>
            </div>
        </Layout>
    )
}

export default CreateProjectForm