import React from "react";
import { Card, Button, Container } from 'react-bootstrap';
// import Projo from "../components/project";
// import github from "./../assets/github-icon-1.svg";
// import linkedin from "./../assets/linkedin-icon-1.svg";
// import twitter from "./../assets/twitter-6.svg";

import projects from "./../data/projects.json"
// import upwork from "./../../upwork.svg";

function Project() {
    return (
        <>
            {projects.map(project => {
                return (
                    <Container className="bg-white shadow-sm mb-3">
                    <Card>
                        {/* <Card.Header>Featured</Card.Header> */}
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>
                                {Project.tools}
                            </Card.Text>
                            <Button variant="dark" href={project.link}>Visit Repository</Button>
                        </Card.Body>
                    </Card>
                    </Container>
                )
            })}
        </>
    )
}

export default Project;