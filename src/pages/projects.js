import React from "react";
import { Col, Row, Card } from 'react-bootstrap';
import Projo from "../components/project";
// import github from "./../assets/github-icon-1.svg";
// import linkedin from "./../assets/linkedin-icon-1.svg";
// import twitter from "./../assets/twitter-6.svg";

import projects from "./../data/projects.json"
// import upwork from "./../../upwork.svg";

function Project() {
    return (
        <>
            {/* <Row md={2} xs={1} lg={3} className="g-3">
                {projects.map(projo => {
                    return(
                    <Col key={projo.id}><Projo {...projo} /></Col>
                )})}
            </Row> */}

            {/* <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {tools}
                </Card.Text>
                <Button variant="primary">Visit Site</Button>
            </Card.Body>
        </Card> */}

            {projects.map(project =>{
                return(
                    <div>{project.title}</div>
                )
            })}
        </>
    )
}

export default Project;