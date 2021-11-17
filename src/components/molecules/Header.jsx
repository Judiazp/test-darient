import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar className="shadow" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    Test Darien
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header;