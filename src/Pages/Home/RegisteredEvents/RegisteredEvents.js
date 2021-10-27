import React from 'react';
import { useParams } from 'react-router';

const RegisteredEvents = () => {
    const { email } = useParams();
    return (
        <div>
            <h4>Registered events</h4>
            <h4>{email}</h4>
        </div>
    );
};

export default RegisteredEvents;