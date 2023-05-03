import React from "react";
import "./NotFound.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import error from "../../assets/error.jpg"

const NotFound = () => {
  return (
    <div className="error-part">
      <Container className="error-page">
        <img className="error-img" src={error} alt="" />
        <h1>Oops!</h1>
        <h3> <span>404</span> PAGE <span>NOT FOUND</span></h3>
        <p>The page you are looking for might have been removed had its name changed of is temporarily unavailable</p>

       <Link to="/"> <button className="btn-error">GO TO HOMEPAGE</button></Link>
      </Container>
    </div>
  );
};

export default NotFound;
