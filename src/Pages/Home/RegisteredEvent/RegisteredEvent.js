import React from 'react';

const RegisteredEvent = ({matched}) => {
    return (
        <div>
            <h3>{matched.service}</h3>
            <h3>{matched.date}</h3>
            <h4>{matched.time}</h4> <br />
        </div>
    );
};

export default RegisteredEvent;