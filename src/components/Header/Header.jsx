import React, { useContext, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css"
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import { AuthContext } from "../providers/AuthProvider";
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
          <Navbar.Brand className="navbar-part" href="#home"><img src={logo}  alt="" />Foodies and Goodies</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link className="navbar-text link" href="login">
                <ActiveLink  to="/">Home</ActiveLink>
              </Nav.Link>
              <Nav.Link className="navbar-text" href="blog">
                <ActiveLink to="/blog">Blog</ActiveLink>
              </Nav.Link>
            </Nav>
            <Nav>
              
              <Nav.Link eventKey={2} href="#memes">
                { user ? <><span className="text-white"> <img title={user.displayName} className="photo-url" src={user.photoURL} alt="" /> <button className="btn-signOut" onClick={handleLogout}>Log Out</button> </span></>:
                 <Link to="login"><button className="btn-login" >Login</button></Link>
                }
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
