import React from "react";
// import Layout from "./Layout";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";



const TestAccordion = () => {
    return (
        <div>
            <h1>Test File</h1>
            <Accordion style={{ width: 400 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}aria-controls="panel1a-content">
                    <Typography style={{fontWeight: 10,}}>
                        Accordion Demo
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Greetings of the day :)</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default TestAccordion