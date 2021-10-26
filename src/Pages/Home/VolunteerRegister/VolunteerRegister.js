import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const VolunteerRegister = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            {service.name}
        </div>
    );
};

export default VolunteerRegister;