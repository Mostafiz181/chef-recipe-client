import React, { useContext } from "react";
import "./Login.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/providers/AuthProvider";

const Login = () => {

  const {signIn} = useContext(AuthContext);

  const handleToLogin = event=>{
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password =form.password.value;
    console.log(email,password);

    signIn(email,password)
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser)
      form.reset()
    })
    .catch(error=>{
      console.log(error)
    })
    
  }




  return (
    <div id="login-part">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="form-container">
              <div className="form">
                <h2>Please Login</h2>

                <form onSubmit={handleToLogin}>
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
