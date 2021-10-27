import React from 'react';
import { useHistory } from 'react-router';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const history = useHistory();
    const handleCardClick = (id) => {
        history.push(`/volunteerRegister/${id}`);
    }
    const randomColor = "#" + (Math.floor(Math.random() * 16777215).toString(16));
    return (
        <Col>
            {/* <Link to={`/volunteerRegister/${service._id}`}> */}
            <Card className="service h-100 border-0" onClick={() => { handleCardClick(service._id) }} style={{ backgroundColor: randomColor }}>
                <Card.Img variant="top" src={service.img} />
                <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                </Card.Body>
            </Card>
            {/* </Link> */}
        </Col>
    );
};

export default Service;