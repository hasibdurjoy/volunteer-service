import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src="https://i.ibb.co/rcY1ksv/Group-1329.png"
                        width="150"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/home">Donation</Nav.Link>
                        <Nav.Link as={Link} to="/home">Events</Nav.Link>
                        <Nav.Link as={Link} to="/home">Blog</Nav.Link>
                        <button className="btn btn-primary rounded mx-3">Register</button>
                        <button className="btn btn-secondary rounded mx-3">Admin</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;