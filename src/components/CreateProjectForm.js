import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import { useAppState } from "../AppState.jsx";
import '../styles/form.css'


const CreateProjectForm = () => {
    
    const { state } = useAppState(null)
    // console.log('state', state)

    const { newProject } = state

    newProject.location_id = `${state.location_id}`

    //  console.log('location id', location_id)

    const match = useParams()
    // console.log(match.action)
    const navigate = useNavigate()
    
    const [formData, setFormData] = useState(state[match.action])


    const actions = {
        newProject: async (location_id) => {
            return fetch(state.apiUrl + "/projects",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            }).then((response) => response.json())
        },
        editProject: async () => {
            return fetch(state.apiUrl + "/projects/" + state.editProject.id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            }).then((response) => response.json())
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        actions[match.action]()
        .then(() => {
            navigate("/dashboard", {getProjects: state.projects})
            // console.log('data from handleSubmit = ', locations)
        })
        
    }

    return(
        <Layout>
            <h1 id="form-header">New Project</h1>
            <div value={state.location_id}>
                <form onSubmit={handleSubmit} id="form-card">
                    <h2>Project Details</h2>
                    <label>Project Name
                        <input className="form-input"
                            type="text"
                            name="name"
                            placeholder="Project Name"
                            value={formData?.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Priority Level
                        <input className="form-input"
                            type="text"
                            name="priority"
                            placeholder="Priority Level"
                            value={formData?.priority}
                            onChange={handleChange}
                        />
                    </label>
                    <input className="form-input"
                        type="text"
                        name="start"
                        placeholder="Start Date"
                        value={formData?.start}
                        onChange={handleChange}
                    />
                    <input className="form-input"
                        type="text"
                        name="completion"
                        placeholder="Completion Date"
                        value={formData?.completion}
                        onChange={handleChange}
                    />
                    <input className="form-input"
                        type="text"
                        name="estimate"
                        placeholder="Estimate"
                        value={formData?.estimate}
                        onChange={handleChange}
                    />
                    <input className="form-input"
                        type="text"
                        name="supply1"
                        placeholder="Supplies"
                        value={formData?.supply1}
                        onChange={handleChange}
                    />
                    <input className="form-input"
                        type="text"
                        name="supply2"
                        placeholder="Supplies"
                        value={formData?.supply2}
                        onChange={handleChange}
                    />
                    <input className="form-input"
                        type="text"
                        name="supply3"
                        placeholder="Supplies"
                        value={formData?.supply3}
                        onChange={handleChange}
                    />
                    <input className="form-input"
                        type="text"
                        name="supply4"
                        placeholder="Supplies"
                        value={formData?.supply4}
                        onChange={handleChange}
                    />
                    <input className="form-input"
                        type="text"
                        name="supply5"
                        placeholder="Supplies"
                        value={formData?.supply5}
                        onChange={handleChange}
                    />
                    <input className="form-input"
                        type="text"
                        name="supply6"
                        placeholder="Supplies"
                        value={formData?.supply6}
                        onChange={handleChange}
                    />
                    <input className="form-input"
                        type="text"
                        name="supply7"
                        placeholder="Supplies"
                        value={formData?.supply7}
                        onChange={handleChange}
                    />
                    <input className="form-input"
                        type="text"
                        name="supply8"
                        placeholder="Supplies"
                        value={formData?.supply8}
                        onChange={handleChange}
                    />
                    <input className="form-input"
                        type="text"
                        name="supply9"
                        placeholder="Supplies"
                        value={formData?.supply9}
                        onChange={handleChange}
                    />
                    <input className="form-input"
                        type="text"
                        name="supply10"
                        placeholder="Supplies"
                        value={formData?.supply10}
                        onChange={handleChange}
                    />
                    <textarea id="description-input"
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={formData?.description}
                        onChange={handleChange}
                    />
                    <button type="submit" value={match.action}>Create</button>
                </form>
                <Link to="/home">Back to Home</Link>
            </div>
        </Layout>
    )
}

export default CreateProjectForm