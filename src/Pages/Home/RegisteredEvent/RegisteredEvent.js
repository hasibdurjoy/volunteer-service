import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';

const RegisteredEvent = ({ event }) => {

    const [volunteers, setVolunteers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/volunteers')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, []);

    const handleDeleteUser = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/volunteers/${id}`;
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
        <Col>
            <Card className=" h-100 ">
                {/* <Card.Img variant="top" src={service.img} /> */}
                <Card.Body>
                    <Card.Title>{event.service}</Card.Title>
                </Card.Body>
                <Card.Text>
                    <p>Register Date : {event.date}</p>
                    <p>Register Time : {event.time}</p>
                    <button onClick={() => { handleDeleteUser(event._id) }} className="btn btn-danger mb-4">Cancel</button>
                </Card.Text>
            </Card>
        </Col>
    );
};

export default RegisteredEvent;