import React from 'react';
import { Card, Col } from 'react-bootstrap';

const RegisteredEvent = ({ event }) => {
    return (
        <Col>
            <Card className=" h-100 ">
                {/* <Card.Img variant="top" src={service.img} /> */}
                <Card.Body>
                    <Card.Title>{event.service}</Card.Title>
                </Card.Body>
                <Card.Text>
                    <p>Register Date : {event.date}</p>
                    <p>Register Time : {event.time}</p>
                    <button className="btn btn-danger mb-4">Cancel</button>
                </Card.Text>
            </Card>
        </Col>
    );
};

export default RegisteredEvent;