import React from 'react';
import logo from '../../img/logo.png';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';




const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }
    
        return (
            <>
               

                <Navbar collapseOnSelect expand="lg" sticky="top" >
                    <Container>
                        <Navbar.Brand href="#home" as={Link} to="/">
                            <img src={logo} width='250px' alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto text-center nav-items nav-item-link">
                                <Nav.Link href="#home" as={Link} to="/">Home</Nav.Link>
                                <Nav.Link href="#inventory" as={Link} to="/inventory">Inventory</Nav.Link>
                                <Nav.Link href="#blog" as={Link} to="/blog">Blog</Nav.Link>
                                
                                
                                {
                                user ? 
                                <Link to ="/login" ><span className='custom-btn d-block text-center' onClick={handleSignOut}>Sign Out</span></Link>
                                :
                                <Link to ="/login" ><span className='custom-btn d-block text-center'>Login</span></Link>
                            }



                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>

        );
    };


    export default Header;