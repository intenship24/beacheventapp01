import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Mangalore Events
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/events">
            Events
          </Nav.Link>
          <Nav.Link as={Link} to="/calendar">
            Calendar
          </Nav.Link>
          <Nav.Link as={Link} to="/beaches">
            Beaches
          </Nav.Link>
          <Nav.Link as={Link} to="/reviews">
            Reviews
          </Nav.Link>
          <Nav.Link as={Link} to="/register">
            Register
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/admin">
            Admin
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
