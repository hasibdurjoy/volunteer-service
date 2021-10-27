import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import RegisteredEvent from '../RegisteredEvent/RegisteredEvent';

const RegisteredEvents = () => {
    const { email } = useParams();
    const [volunteer, setVolunteer] = useState([]);

    useEffect(() => {
        fetch(`https://damp-sands-70230.herokuapp.com/volunteers`)
            .then(res => res.json())
            .then(data => setVolunteer(data))
    }, []);

    const matchedServices = volunteer.filter(vol => vol.email === email)
    console.log(matchedServices);
    return (
        <div>
            <h4>Your Registered events</h4>
            {
                matchedServices.map(matched => <RegisteredEvent matched={matched}></RegisteredEvent>)
            }
        </div>
    );
};

export default RegisteredEvents;