import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import RegisteredEvent from '../RegisteredEvent/RegisteredEvent';

const RegisteredEvents = () => {
    const { email } = useParams();
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch(`https://damp-sands-70230.herokuapp.com/volunteers`)
            .then(res => res.json())
            .then(data => setVolunteers(data.filter(vol => vol.email === email)))
    }, []);

    return (
        <div>
            <h4>Your Registered events</h4>
            <Row xs={1} md={3} className="g-4 mx-5 mt-3">
                {
                    volunteers.map(event => <RegisteredEvent key={event._id} event={event}></RegisteredEvent>)
                }
            </Row>
        </div>
    );
};

export default RegisteredEvents;