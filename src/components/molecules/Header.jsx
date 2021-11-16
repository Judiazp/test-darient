import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar className="shadow" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    Test Darient
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header;