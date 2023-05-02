import React, { useContext, useState } from "react";
import "./Login.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../components/providers/AuthProvider";
import app from "../firebase/firebase.config";

const Login = () => {
  // test for google sign in methods

  const [user,setUser]=useState(null)

  const auth=getAuth(app)
  const provider = new GoogleAuthProvider();
  const githubProvider= new GithubAuthProvider();
  const handleGoogleSignIn=()=>{
    signInWithPopup(auth,provider)
    .then(result=>{
      const user =result.user;
      console.log(user)
    })
    .catch(error=>{
      console.log("error", error.message)
    })
  }

  const handleGithubSignIn=()=>{
    signInWithPopup(auth,githubProvider)
    .then(result=>{
      const loggedInUser=result.user;
      console.log(loggedInUser)
      setUser(loggedInUser)
      
    })
    .catch(error=>{
      console.log(error)
    })
  }



  //test for google sign in methods

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
             
                    
                  <button onClick={handleGoogleSignIn} className="login">Login With Google</button>

                  <button onClick={handleGithubSignIn} className="login">Login With Github</button>


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











// const updateUserInfo = (user, name, photoUrl) => {
//   updateProfile(user, { displayName: name, photoURL: photoUrl })
//     .then(() => {})
//     .catch((error) => {
//       console.log(error);
//     });
// };
