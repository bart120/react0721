import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="#">Formation React</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Accueil</Nav.Link>
                        <Nav.Link href="#">Voitures</Nav.Link>
                        <Nav.Link href="#">Ajouter</Nav.Link>
                        <Nav.Link href="#">Connexion</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
