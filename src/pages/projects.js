import React from "react";
import { Row, Col } from 'react-bootstrap';
import projects from "./../data/projects.json"
import { Projo } from "../components/project";

function Project() {
    return (
        <>
            {/* <h1>My Projects</h1>
            <Row className="g-3" md={2} xs={1} lg={3}>
                {projects.map(project => (
                    <Col key={project.id}>
                        <Card>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Img src={project.image} />
                            <Card.Body>
                                <Card.Text className="d-flex justify-content-space-between align-items-baseline">
                                    <span>{project.description}</span>
                                    <Button variant="dark" href={project.link}>Visit Repository</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row> */}
            <h1>My Projects</h1>
            <Row className="g-3" md={2} xs={1} lg={3}>
                {projects.map(project => (
                    <Col key={project.id}>
                        <Projo {...project} />
                        {/* <h1>ughkjgjk</h1> */}
                    </Col>
                ))}
            </Row>

        </>
    )
}

export default Project;