import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer-part">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="footer">
              <h2>Useful Links</h2>
              <p>FoodHub Overview</p>
              <p>How to by Online</p>
              <p>Payment Options</p>
              <p>Legal Security</p>
              <p>Refund Policy</p>
              <p>Contact Center</p>

   
            </div>
          </Col>
          <Col lg={3}>
            <div className="footer">
              <h2>Our Services</h2>
              <p>Transaction</p>
              <p>Exchange</p>
              <p>Investment</p>
              <p>Shopping</p>
              
            </div>
          </Col>
          <Col lg={3}>
            <div className="footer">
              <h2>Get In Touch</h2>
              <p>Email:</p>
              <p>foodhub@gmail.com</p>
              <p>Phone:</p>
              <p>Tollfree:2458545214525</p>
              <p>Address:</p>
              <p>Cox's Bazar. Dhaka</p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="footer">
              <h2>We Are Social</h2>
              <p><FaFacebook></FaFacebook> Facebook</p>
              <p><FaTwitter></FaTwitter> Twitter</p>
              <p><FaLinkedin></FaLinkedin> Linkedin</p>
              <p><FaPinterest></FaPinterest> Pinterest</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
