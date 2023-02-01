import React, { useEffect} from "react"
import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import { useAppState } from "../AppState"
import "../styles/dashboard.css"


const Dashboard = (props) => {
    // console.log(props)

    const {state, dispatch} = useAppState(null)
    // console.log(state)
    const { apiUrl, locations } = state

    const getProjects = async () => {
        const response = fetch(apiUrl + "/locations/")
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
                <h1>Dashboard</h1>
                <Link to="/create"><button>New Project</button></Link>
                <div>
                    {locations.map((location) => (
                        <div id="project-card" key={location.id}>
                            <h2>Location: {location.name}</h2>
                            {
                                location.projects.map((project)=> (
                                    // console.log(project)
                                    <h3>{project.name}</h3>
                                ))
                            }
                        </div>
                    ))}
                </div>   
                <Link to="/"><button>Go to Home Page</button></Link>
            </Layout>
        )
        
    }

    const loading = () => {
        return <Layout><h1>Loading...</h1></Layout>
    }
    
    return locations ? loaded() : loading()
           
}

export default Dashboard
