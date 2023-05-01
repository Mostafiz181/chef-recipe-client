import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css"
import { FaGrinBeam } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Ranna Ghor</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="navbar-text" href="#features">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link className="navbar-text" href="#pricing">
                <Link to="/blog">Blog</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets"><FaGrinBeam></FaGrinBeam></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
               <button className="btn-login">Login</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
