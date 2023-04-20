//React
import React from "react";
import { Outlet, Link } from "react-router-dom";


//Bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function NavBar(props) {
    return (
        < >
            <Navbar bg="light"  expand="xl" fixed="top">
                <Container>
                    <Link className="nav-links" to="/Home"><span>Home</span></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 link-dark text-sm-center"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className="nav-links" to="/Gallery"><span>Gallery</span></Link>
                            <NavDropdown className="nav-links" title="Places" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action4">
                                    <Link className="nav-links" to="/Wellington">
                                        <span>Wellington</span>
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Queenstown
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Link className="nav-links" to="/About">
                                    <span>About</span>
                            </Link>
                        </Nav>
                        <Form className="d-flex">
                            <Button variant="outline-success" onClick={props.handleShow}>Login</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet />
        </>
    );
}

export default NavBar;