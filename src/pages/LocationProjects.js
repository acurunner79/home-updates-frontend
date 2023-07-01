import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useAppState } from "../AppState";
import "../styles/location-projects.css"


const LocationProjects = () => {

  

    const {state, dispatch} = useAppState()
    // console.log('state in projects list', state)
    const { apiUrl, location_id, projectsList } = state

    const getProjects = async () => {
        const response = fetch( apiUrl + "/locations/" + location_id , {
            method: "GET"
        })
        const projectsList = await (await response).json()
        dispatch({type: "getProjectsList", payload: projectsList})
        // console.log('projects from fetch', projectsList)
    }

    useEffect(() => {
        getProjects()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loaded = () => {
        // console.log('loaded locations', projectsList.location)
        
        return (
            <Layout>
                <div id="project-main-container">
                        {
                        projectsList.projects.map((data, index) => {
                            return(   
                                <div id="project-list-card" key={index}>
                                    <Accordion>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography>
                                                <h2>Project Name: {data.name || "No Projects"}</h2>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <h2>Priority: {data.priority}</h2>
                                                <h2>Start Date: {data.start}</h2>
                                                <h2>End Date: {data.completion}</h2>
                                                <h2>Estimate: ${data.estimate}</h2>
                                                <h2>Supplies: {data.supply1}</h2>
                                                <h2>Supplies: {data.supply2}</h2>
                                                <h2>Supplies: {data.supply3}</h2>
                                                <h2>Supplies: {data.supply4}</h2>
                                                <h2>Supplies: {data.supply5}</h2>
                                                <h2>Supplies: {data.supply6}</h2>
                                                <h2>Supplies: {data.supply7}</h2>
                                                <h2>Supplies: {data.supply8}</h2>
                                                <h2>Supplies: {data.supply9}</h2>
                                                <h2>Supplies: {data.supply10}</h2>
                                            </Typography>
                                        </AccordionDetails>
                                        <Accordion>
                                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                                <Typography><h2>Description</h2></Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    <h2>{data.description}</h2>
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Accordion>
                                </div>              
                            )
                        })
                        }
                </div>
                <Link to="/home">Back to Home</Link>
            </Layout>
        )
    }


    const loading = () => {
        return <Layout><h1>Loading projects list</h1></Layout>
    }

    return projectsList ? loaded() : loading()
}

export default LocationProjects