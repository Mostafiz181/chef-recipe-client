import React, { useContext, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css"
import { FaGrinBeam } from 'react-icons/fa';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import { AuthContext } from "../providers/AuthProvider";
import { onAuthStateChanged, updateCurrentUser } from "firebase/auth";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {

  const {user,logOut} = useContext(AuthContext)
  console.log(user)

  const handleLogout = ()=>{
        logOut()
        .then(result=>{})
        .catch(error=> console.error(error))
  }


  return (
    <div id="navbar-part">
      <Navbar className="nav" collapseOnSelect expand="lg" bg="" variant="">
        <Container >
          <Navbar.Brand className="navbar-part" href="#home"><img src={logo}  alt="" />Fodies and Goodies</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link className="navbar-text" href="#features">
                <ActiveLink to="/">Home</ActiveLink>
              </Nav.Link>
              <Nav.Link className="navbar-text" href="#pricing">
                <ActiveLink to="/blog">Blog</ActiveLink>
              </Nav.Link>
            </Nav>
            <Nav>
              
              <Nav.Link eventKey={2} href="#memes">
               <Link to="login"><button className="btn-login" >Login</button></Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {user && <span className="text-white"> <img className="photo-url" src={user.photoURL} alt="" /> <button className="btn-signOut" onClick={handleLogout}>Log Out</button> </span> }
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
