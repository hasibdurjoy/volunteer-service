import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    return (
        <Col>
            <Link to={`/volunteerRegister/${service._id}`}>
                <Card>
                    <Card.Img variant="top" src={service.img} />
                    <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

export default Service;