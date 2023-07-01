import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import { useAppState } from "../AppState.jsx";
import '../styles/form.css'


const CreateLocationForm = () => {
    
    const { state } = useAppState(null)
    // console.log('state', state)
    
    const match = useParams()
    const navigate = useNavigate()
    
    const [formData, setFormData] = useState(state[match.action])
    console.log(match.action)
    // console.log('form data = ', formData)

    const actions = {
        newLocation: async () => {
            return fetch(state.apiUrl + "/locations",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            }).then((response) => response.json())
        },
        editLocation: async () => {
            return fetch(state.apiUrl + "/locations/" + state.editLocation.id, {
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
            navigate("/", {getLocations: state.locations})
            // console.log('data from handleSubmit = ', locations)
        })
        
    }

    return(
        <Layout>
            <h1 id="form-header">New Project</h1>
            <div>
                <form onSubmit={handleSubmit} id="form-card">
                    <h2>Location</h2>
                    <input className="form-input"
                        type="text"
                        name="name"
                        value={formData?.name}
                        placeholder="Location"
                        onChange={handleChange}
                    />
                    <button type="submit" value={match.action}>Create</button>
                </form>
                <Link to="/home">Back to Home</Link>
            </div>
        </Layout>
    )
}

export default CreateLocationForm