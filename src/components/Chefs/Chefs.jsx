import React, { useEffect, useState } from "react";
import "./Chefs.css";
import {  Container, Row } from "react-bootstrap";
import Chef from "../Chef/Chef";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  // test start from here
  //   const {chef_name}= chefs;

  // test end from here

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div id="chefs-part">
      <Container>
        <div className="team-title">
          <h2>Our Team</h2>
          <h3>Our Experienced Chef's</h3>
        </div>

        <div className="d-flex">
          <Row>
            {chefs.map((chef) => (
              <Chef key={chef.id} chef={chef}></Chef>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Chefs;
