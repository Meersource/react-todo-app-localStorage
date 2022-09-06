import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';


export const Navbars = () => {
  return (
    <div>

<Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand > <Link to="/">Meer</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link to="/">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/user">User</Link></Nav.Link>
            <Nav.Link ><Link to="/about">About</Link></Nav.Link>

           
          </Nav>
        </Container>
      </Navbar>


    </div>
  )
}
