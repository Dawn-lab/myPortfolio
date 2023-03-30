import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";

export function Projo({ title, description, image, id, link }) {
    return (
        <Fragment className="h-100">
            <Card.Title className="mb-2">
                {title}
            </Card.Title>
            <Card>
                <Card.Img src={image} height="200px" style={{ objectFit: "cover" }} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Text className="d-flex justify-content-between align-items-baseline">
                        <span>{description}</span>
                        <Button href={link} className="ms-2" variant="dark">Visit Site</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

// export default Projo;