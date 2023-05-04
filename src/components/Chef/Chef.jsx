import React from "react";
import "./Chef.css";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Chef = ({ chef }) => {
  const {
    id,
    chef_picture,
    chef_name,
    years_of_experience,
    num_recipes,
    likes,
  } = chef;
  console.log(chef);
  return (
    <>
      <Col lg={4}>
        <Card className="card mb-5 shadow">
          <LazyLoad width={500} height={300} threshold={1}>
            <Card.Img
              variant="top"
              className="img"
              src={chef_picture}
              alt="img"
            />
          </LazyLoad>

          <Card.Body>
            <Card.Title className="title">{chef_name}</Card.Title>
            <div className="card-text">
              <p>Experience: {years_of_experience}</p>
              <p>Recipes:{num_recipes}</p>
              <p>Likes:{likes}</p>
              <Link to={`ChefDetails/${id}`}>
                <Button className="btn-view" variant="primary">
                  view recipe
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Chef;
