import React, { useState } from "react";
import "./SignIn.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [error,setError]= useState('')
  const [success,setSuccess]= useState('')

  const handleToRegister = event =>{
    event.preventDefault();
    const form =event.target;
    const name =form.text .value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password)
  
    if(password.length < 6){
      setError("Password at least 6 characters")
      return
    }
    else{
      setSuccess('Successfully register')

    }
  }
  return (
    <div>
      <div id="login-part">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="form-container">
                <div className="form">
                  <h2>Register</h2>

                  <form onSubmit={handleToRegister}>
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

                    <button className="login">Register</button>

                    <p className="link">
                      <small>
                        Already have an account?{" "}
                        <Link to="/login">
                          <small>Login</small>
                        </Link>{" "}
                      </small>
                    </p>

                    <p className="text-error">{error}</p>
                    <p className="text-success">{success}</p>
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
