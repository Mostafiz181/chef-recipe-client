import React from "react";
import "./SignIn.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <div id="login-part">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="form-container">
                <div className="form">
                  <h2>Register</h2>

                  <form>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      placeholder="Enter Your Name"
                      required
                    />

                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Your Email"
                      required
                    />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter Your password"
                      required
                    />

                    <input
                      type="text"
                      name="photo"
                      id="photo"
                      placeholder="Enter Your Photo Url"
                      required
                    />

                    <button className="login">Register</button>

                    <p className="link">
                      <small>
                        Already have an account?{" "}
                        <Link to="/login">
                          <small>Login</small>
                        </Link>{" "}
                      </small>
                    </p>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SignIn;
