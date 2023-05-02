import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css"
import { FaGrinBeam } from 'react-icons/fa';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <div id="navbar-part">
      <Navbar className="nav" collapseOnSelect expand="lg" bg="" variant="">
        <Container >
          <Navbar.Brand className="navbar-part" href="#home"><img src={logo}  alt="" />FoodHub</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ">
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
