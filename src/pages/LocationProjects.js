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
                                                <h2>Project Name: <br/>{data.name || <h2>No Projects</h2>}</h2>
                                                <div id="seperator"></div>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <h2 className="project-items">Priority: {data.priority}</h2>
                                                <h2 className="project-items">Start Date: {data.start}</h2>
                                                <h2 className="project-items">End Date: {data.completion}</h2>
                                                <h2 className="project-items">Estimate: ${data.estimate}</h2>
                                                <div id="seperator"></div>
                                                <h3 className="project-items">Supplies: {data.supply1}</h3>
                                                <h3 className="project-items">Supplies: {data.supply2}</h3>
                                                <h3 className="project-items">Supplies: {data.supply3}</h3>
                                                <h3 className="project-items">Supplies: {data.supply4}</h3>
                                                <h3 className="project-items">Supplies: {data.supply5}</h3>
                                                <h3 className="project-items">Supplies: {data.supply6}</h3>
                                                <h3 className="project-items">Supplies: {data.supply7}</h3>
                                                <h3 className="project-items">Supplies: {data.supply8}</h3>
                                                <h3 className="project-items">Supplies: {data.supply9}</h3>
                                                <h3 className="project-items">Supplies: {data.supply10}</h3>
                                            </Typography>
                                        </AccordionDetails>
                                        <Accordion>
                                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                                <Typography><h2>Description</h2></Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    <p>{data.description}</p>
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Accordion>
                                </div>              
                            )
                        || <h2>No Projects</h2>})
                        }
                </div>
                <div className="back-home-link">
                    <Link to="/home">Back to Home</Link>
                </div>
            </Layout>
        )
    }


    const loading = () => {
        return <Layout><h1>Loading projects list</h1></Layout>
    }

    return projectsList ? loaded() : loading() 
}

export default LocationProjects