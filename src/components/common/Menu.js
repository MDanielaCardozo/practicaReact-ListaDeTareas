import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

const Menu = () => {
    return (
        <Navbar bg="success" variant='dark' expand="lg">
        <Container>
          <Navbar.Brand as={Link} to='/'>Lista de tareas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to='/'className='nav-item nav-link'>Inicio</NavLink>
              <NavLink end to='/administrar'className='nav-item nav-link'>Administrar</NavLink>
              <NavLink end to='/administrar/tarea/crear'className='nav-item nav-link'>Crear</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Menu;