import React, { useEffect} from "react"
import { Link, useNavigate } from "react-router-dom"
import Layout from "../components/Layout"
import { useAppState } from "../AppState.jsx"
import "../styles/dashboard.css"


const Dashboard = () => {

    const {state, dispatch} = useAppState(null)
    // console.log(state)
    const { apiUrl, locations } = state

    const navigate = useNavigate()

    const getProjects = async () => {
        const response = fetch(apiUrl + "/locations/", {
            method: "GET"
        })
        const locations = await (await response).json()
        dispatch({type: "getLocations", payload: locations})
    }

    

    useEffect(() => {
        getProjects()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loaded = () => {  
            return(
            <Layout>
                <div id="dashboard-main-container">
                    <h1>Dashboard</h1>
                    <div>
                        {locations.map((location) => (
                            <div key={location.id}>
                                <h2>Location: {location.name}</h2>
                                {
                                    location.projects ? (
                                        <button onClick={() => {
                                            dispatch({type: "selectId", payload: location.id})
                                            navigate("/dashboard/newProject",{...getProjects})
                                        }}>New Project</button>
                                    ) : null
                                }
                                {
                                    location.projects.map((project)=> (
                                        // console.log(project)
                                        <div id="project-card" key={project.id}>
                                            <h3>Project Name: {project.name}</h3>
                                            <h3>Priority: {project.priority}</h3>
                                            <h3>Start Date: {project.start}</h3>
                                            <h3>End Date: {project.completion}</h3>
                                            <h3>Estimate: ${project.estimate}</h3>
                                            <h3>Supplies: {project.supply1 || "N/A"}</h3>
                                            <h3>Supplies: {project.supply2 || "N/A"}</h3>
                                            <h3>Supplies: {project.supply3 || "N/A"}</h3>
                                            <h3>Supplies: {project.supply4 || "N/A"}</h3>
                                            <h3>Supplies: {project.supply5 || "N/A"}</h3>
                                            <h3>Supplies: {project.supply6 || "N/A"}</h3>
                                            <h3>Supplies: {project.supply7 || "N/A"}</h3>
                                            <h3>Supplies: {project.supply8 || "N/A"}</h3>
                                            <h3>Supplies: {project.supply9 || "N/A"}</h3>
                                            <h3>Supplies: {project.supply10}</h3>
                                            <h3>Description: {project.description}</h3>
                                            <button onClick={() => {
                                                dispatch({type: "select", payload: project})
                                                // console.log('project', project)
                                                navigate("/editProject", {...getProjects})
                                            }}>Edit</button>
                                            <button onClick={() => {
                                                fetch(apiUrl + "/projects/" + project.id, {
                                                    method: "DELETE"
                                                }).then(() => getProjects())
                                            }}>Delete</button>
                                            {   !location.projects ? (
                                                <button onClick={() => {
                                                dispatch({type: "selectId", payload: location.id})
                                                navigate("/newProject")
                                                }}>New Project</button>
                                            ) : null}
                                        </div>
                                    ))
                                }
                            </div>
                        ))}
                    </div>   
                    <Link to="/"><button>Go to Home Page</button></Link>
                </div>
            </Layout>
        )
        
    }

    const loading = () => {
        return <Layout><h1>Loading...</h1></Layout>
    }
    
    return locations ? loaded() : loading()
           
}

export default Dashboard
