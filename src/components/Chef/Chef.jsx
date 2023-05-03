import React from "react";
import "./Chef.css";
import { Button, Card, Col } from "react-bootstrap";

const Chef = ({ chef }) => {
  const { chef_picture, chef_name, years_of_experience, num_recipes, likes } =
    chef;
  console.log(chef);
  return (
    <>
      <Col lg={4}>
        <Card className="card mb-3">
          <Card.Img
            variant="top"
            className="img"
            src={chef_picture}
            alt="img"
          />
          <Card.Body>
            <Card.Title className="title">{chef_name}</Card.Title>
            <div className="card-text">
              <p>Experience: {years_of_experience}</p>
              <p>Recipes:{num_recipes}</p>
              <p>Likes:{likes}</p>
              <Button className="btn-view" variant="primary">view details</Button>
            </div>

            
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Chef;
