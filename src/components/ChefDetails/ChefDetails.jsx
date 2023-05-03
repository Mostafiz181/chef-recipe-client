import React from "react";
import "./ChefDetails.css";
import { useLoaderData } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaHandPointRight, FaHeart, FaMedal } from "react-icons/fa";
import CardDetails from "./CardDetails";

const ChefDetails = () => {
  const data = useLoaderData();

  const {
    chef_name,
    chef_picture,
    years_of_experience,
    num_recipes,
    likes,
    bio,
    recipes,

    // recipe_name,

    // ingredients,
    // cooking_method,
    // rating,
    // recipe_img,
  } = data;
  console.log(data);

  return (
    <div className="chef-details-part">
      <Container>
        <h2>chef details</h2>

        <Row>
          <Col lg={4}>
            <div className="chef-img">
              <img src={chef_picture} alt="" />
            </div>
          </Col>
          <Col lg={8}>
            <div className="chef-more shadow-lg">
              <h1 className="chef-name">{chef_name}</h1>
              <p className="chef-bio">{bio}</p>

              <div className="chef-count">
                <p>
                  {" "}
                  <FaHeart></FaHeart> {num_recipes}
                </p>
                <p>
                  {" "}
                  <FaMedal></FaMedal> {years_of_experience}
                </p>
                <p>
                  {" "}
                  <FaHandPointRight></FaHandPointRight> {likes}
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <div className="chef-info">
          <Row>
            {recipes.map((recipe) => (
              <CardDetails recipe={recipe}></CardDetails>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ChefDetails;
