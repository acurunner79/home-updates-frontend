import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../AppState.jsx";
import Layout from "../components/Layout";
import '../styles/homepage.css'


const HomePage = () => {

    const { state, dispatch } = useAppState()
    // console.log('state from HomePage', state)

    const navigate = useNavigate()

    const { apiUrl, locations } = state
    // console.log(apiUrl)


    const getLocations = async () => {
        const response = fetch(apiUrl + "/locations", {
            method: "GET"
        })
        const locations = await (await response).json()
        dispatch({type: "getLocations", payload: locations})
    }

    

    useEffect(() => {
        getLocations()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const loaded = () => {
        
        return (
            <Layout>
                <div id="home-upper-container">
                    <h1>Home Page</h1>
                    {/* <button onClick={(() => { navigate("/dashboard")})}>Go to Dashboard</button> */}
                    <button onClick={() => { navigate("/home/newLocation", {...getLocations})}}>Add New Location</button>
                </div>
                <div id="home-mid-container">
                    {
                        locations?.map((location) => {
                            return(
                                <div id="home-locations-card" key={location.id}>
                                    <h2>{location.name || "'Not Added By User'"}</h2>
                                    <button onClick={() => {
                                        dispatch({type: "selectId", payload: location.id})
                                        navigate('/projects', location.id)
                                    }}>View Projects</button>
                                </div>
                            )
                        })
                    }
                </div>
            </Layout>
        )
    }

    const loading = () => {
        return <Layout><h1>Loading locations for projects...</h1></Layout>
    }

    return locations ? loaded() : loading()
}

export default HomePage