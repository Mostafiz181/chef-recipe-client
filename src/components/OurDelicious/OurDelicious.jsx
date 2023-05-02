import React from "react";
import "./OurDelicious.css";
import { Col, Container, Row } from "react-bootstrap";
import fruits from "../../assets/fruits.jpg";
import lunch from "../../assets/lunch.jpg";
import dinner from "../../assets/dinner.jpg";
import dessert from "../../assets/dessert.jpg";

const OurDelicious = () => {
  return (
    <div id="delicious-part">
      <Container>
        <div className="delicious-title">
          <h2>Our Delicious</h2>
          <p>Our Magical Experience</p>
        </div>

        <div className="delicious-item">
          <Row>
            <Col lg={3}>
              <div className="delicious-overlay">
                <img src={fruits} alt="" />
                <div className="overlay">
                    <p>Spicy breakfast</p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="food-div">
                <h1>Breakfast</h1>
                <p>
                  We are always serve delicious breakfast for our customers.
                  They are so much satisfied for our service.
                </p>

                <button>Order Now</button>
              </div>
            </Col>

            <Col lg={3}>
            <div className="delicious-overlay">
                <img src={lunch} alt="" />
                <div className="overlay">
                    <p>spicy Lunch</p>
                </div>
              </div>
            </Col>

            <Col lg={3}>
              <div className="food-div">
                <h1>Delicious Lunch</h1>
                <p>
                  There are many chef's here who are always ready to cook. They
                  are always cook delicious lunch for serve. They are always
                  provide their best.
                </p>
                <button>Order Now</button>
              </div>
            </Col>

            <Col lg={3}>
            <div className="delicious-overlay">
                <img src={dinner} alt="" />
                <div className="overlay">
                    <p>Delicious Dinner</p>
                </div>
              </div>
            </Col>

            <Col lg={3}>
              <div className="food-div">
                <h1>Dinner</h1>
                <p>
                  There are many chef's here who are always ready to cook. They
                  are always cook delicious dinner for serve. They are always
                  provide their best.
                </p>
                <button>Order Now</button>
              </div>
            </Col>

            <Col lg={3}>
            <div className="delicious-overlay">
                <img src={dessert} alt="" />
                <div className="overlay">
                    <p>Yammy Desert</p>
                </div>
              </div>
            </Col>

            <Col lg={3}>
              <div className="food-div">
                <h1>Desserts</h1>
                <p>
                  There are many chef's here who are always ready to serve
                  dessert after dinner. They are always cook delicious dinner
                  for serve. They are always provide their best.
                </p>

                <button>Order Now</button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default OurDelicious;
