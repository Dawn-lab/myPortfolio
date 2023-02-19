import React from "react";
import { Card, Button } from "react-bootstrap";

function Projo(title, tools){
        return(
        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {tools}
                </Card.Text>
                <Button variant="primary">Visit Site</Button>
            </Card.Body>
        </Card>
        )
}

export default Projo;