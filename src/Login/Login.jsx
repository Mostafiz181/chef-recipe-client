import React from "react";
import "./Login.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div id="login-part">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="form-container">
              <div className="form">
                <h2>Please Login</h2>

                <form>
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

                  <button className="login">Login</button>

                  <p className="link">
                    <small>
                      New to FoodHub?{" "}
                      <Link to="/signIn">
                        <small>Create New Account</small>
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
  );
};

export default Login;
