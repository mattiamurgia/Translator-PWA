import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ThemeContext } from '../../App';

export const NavbarCustom = () =>
{
    const theme = useContext(ThemeContext);

    return (
        <Navbar expand="lg" className={`navbar-style-${theme}`}>
            <Container>
                {/* Routing */}
                <Link to="/" style={{ textDecorationLine: 'none' }}>
                    <img src="/languages.png" width="28" height="28" alt='' className='mb-2 me-2' />
                    <Navbar.Brand className="link-light fw-bold">Translator Online</Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    {/* Routing Link */}
                    <Nav className="mx-auto me-5">
                        <Link to="/" className="nav-link ms-5 link-light fw-bold">Home</Link>
                        <Link to="/translator" className="nav-link ms-5 link-light fw-bold">Translator</Link>
                        <Link to="/help" className="nav-link ms-5 link-light fw-bold">Help</Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar >

    );
};



