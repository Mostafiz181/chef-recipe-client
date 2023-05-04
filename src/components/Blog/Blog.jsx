import React from "react";
import "./Blog.css";
import ReactToPdf from "react-to-pdf";
import { Col, Container, Row } from "react-bootstrap";

const Blog = () => {
  const ref = React.createRef();
  return (
    <div>
      <ReactToPdf targetRef={ref} filename="div-blue.pdf">
        {({ toPdf }) => (
          <button className=" btn-primary mb-10" onClick={toPdf}>
            Generate pdf
          </button>
        )}
      </ReactToPdf>

      <div style={{ width: 1000, height: 800, background: 'white' }} ref={ref} >

      <div id="blog-part">
      <Container>
        <Row>
          <Col lg={12}>
            <h2>Question and Answer part</h2>

            <h3>
              Ques: What is the differences between uncontrolled and controlled
              components?
            </h3>
            <h5>
              Ans: Controlled components are managed and maintained by a central
              authority, whereas uncontrolled components are not. Controlled
              components are often tightly integrated with the system, while
              uncontrolled components are more loosely coupled.
            </h5>

            <h3>Ques: How to validate React props using PropTypes ?</h3>
            <h5>
              Ans: In React, PropTypes is a built-in library that can be used to
              validate the data types of props passed to a component. To
              validate a component's props using PropTypes, you can import the
              library and define a propTypes object in your component,
              specifying the expected data type for each prop.
            </h5>

            <h3>Ques:What is the difference between nodeJs and expressJs?</h3>
            <h5>
              Ans: Node.js is a JavaScript runtime that allows developers to run
              JavaScript code outside of a web browser. It provides a platform
              for building server-side applications using JavaScript.
              Express.js, on the other hand, is a popular web framework for
              Node.js. It provides a set of features and tools for building web
              applications and APIs quickly and easily. Express.js provides a
              variety of HTTP utility methods and middleware to create robust
              APIs.
            </h5>

            <h3>Ques: What is custom hook and why will you create a custom hook?</h3>
            <h5>Ans: In React, a custom hook is a function that allows me to reuse stateful logic across multiple components. Custom hooks are simply JavaScript functions that use the built-in React hooks like useState(), useEffect(), useContext(), etc., but with additional functionality specific to my use case.</h5>
          </Col>
        </Row>
      </Container>
    </div>


      </div>
    </div>


  );
};

export default Blog;
