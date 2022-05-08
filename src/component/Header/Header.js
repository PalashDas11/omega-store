import React from 'react';
import logo from '../../img/logo.png';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';




const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }
    
        return (
            <>
               

                <Navbar collapseOnSelect expand="lg" sticky="top" className="custom-header" >
                    <Container>
                        <Navbar.Brand href="#home" as={Link} to="/">
                           <div className="d-flex align-items-center">
                           <img src={logo}  alt="" />
                           </div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto text-center nav-items nav-item-link">
                                <Link href="#home" to="/">Home</Link>
                                <Link href="#inventory" to="/inventory">Inventory</Link>
                                <Link href="#blog" to="/blog">Blog</Link>
                                {
                                    user && <>
                                    <Link to ="/addItem">Add Inventory</Link>
                                     <Link to ="/manageItems">Manage Items</Link>
                                     <Link to ="/myItem">My items</Link>
                                    </>
                                }
                                
                                
                                {
                                user ? 
                                <Link to ="/login" ><span className='text-center' onClick={handleSignOut}> LogOut <FontAwesomeIcon icon={faUser}></FontAwesomeIcon></span></Link>

                                :
                                <Link to ="/login" ><span className='text-center'>Login <FontAwesomeIcon icon={faUser}></FontAwesomeIcon></span></Link>
                            }



                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>

        );
    };


    export default Header;