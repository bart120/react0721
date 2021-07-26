import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="#">Formation React</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">Accueil</Link>
                        <Link className="nav-link" to="/cars/list">Voitures</Link>
                        <Link className="nav-link" to="/cars/add">Ajouter</Link>
                        <Link className="nav-link" to="/auth/login">Connexion</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
