import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Container>
            <Row xs={1} md={4} className="g-4">
                {
                    services.map(service => <Service key={service.key} service={service}></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;