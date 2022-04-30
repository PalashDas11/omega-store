import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <>

            <Navbar collapseOnSelect expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#home" as={Link} to="/">
                        <span>Omega</span>
                        <span> Grocery</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav-items">
                            <Nav.Link href="#home" as={Link} to="/">Home</Nav.Link>
                            <Nav.Link href="#inventory" as={Link} to="/inventory">Inventory</Nav.Link>
                            <Nav.Link href="#blog" as={Link} to="/blog">Blog</Nav.Link>
                            {/* {
                                user ? 
                                <Nav.Link href="#register" as={Link} to="/register" className='custom-btn2 'onClick={handleSignOut}>Sign Out</Nav.Link>
                                :
                                <Nav.Link href="#login" as={Link} to="/login" className='custom-btn2 '>Login</Nav.Link>
                            } */}
                            


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
   
    );
};

export default Header;