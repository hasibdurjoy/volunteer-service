import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
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
                        <Nav.Link as={Link} to={`/volunteers/${user.email}`}>Events</Nav.Link>
                        <Nav.Link as={Link} to="/home">Blog</Nav.Link>
                        {
                            user?.email ? <>
                                <Nav.Link><button className="btn btn-primary rounded mx-2">{user.displayName}</button></Nav.Link>
                                <Nav.Link><button onClick={logOut} className="btn btn-danger rounded mx-2">Log out</button></Nav.Link>
                            </>
                                :
                                <>
                                    <Nav.Link as={Link} to="/login"><button className="btn btn-primary rounded mx-2">Log in/Register</button></Nav.Link>
                                    <Nav.Link as={Link} to="/admin"> <button className="btn btn-warning rounded mx-2">Admin</button></Nav.Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;