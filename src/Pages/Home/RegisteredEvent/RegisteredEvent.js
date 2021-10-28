import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const RegisteredEvent = ({ event }) => {

    const [volunteers, setVolunteers] = useState([]);
    useEffect(() => {
        fetch('https://damp-sands-70230.herokuapp.com/volunteers')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, []);

    const handleDeleteUser = (id) => {
        const proceed = window.confirm('Are you sure, you want to cancel?');
        if (proceed) {
            const url = `https://damp-sands-70230.herokuapp.com/volunteers/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingVolunteers = volunteers.filter(volunteer => volunteer._id !== id);
                        setVolunteers(remainingVolunteers);
                        // window.reload();
                        window.location.reload();
                    }
                });
        }
    }

    return (
        <Col className="h-100">
            <Card className="shadow-sm h-100">
                <Card.Body>
                    <Row>
                        <Col xs={4}>
                            <img className="img-fluid" src={event.img} alt="" />
                        </Col>
                        <Col xs={8}>
                            <Card.Body>
                                <Card.Title>{event.service}</Card.Title>
                            </Card.Body>
                            <Card.Text>
                                <p>Register Date : {event.date}</p>
                                <p>Register Time : {event.time}</p>
                                <button onClick={() => { handleDeleteUser(event._id) }} className="btn btn-danger mb-4">Cancel</button>
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default RegisteredEvent;