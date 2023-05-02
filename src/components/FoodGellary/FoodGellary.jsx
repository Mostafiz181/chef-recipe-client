import React from "react";
import "./FoodGellary.css";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";

const FoodGellary = () => {
  return (
    <div>
      <Container>
        <div id="gallery-part">
          <h1 className="gallery-title">Food Gallery</h1>
          <h3 className="gallery-text">We Create Delicious Memory</h3>
        </div>
      </Container>

      <div className="gallery-item">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="gallery">
                <img className="img" src={img1} alt="" />
                <div className="overlay"></div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="gallery">
                <img className="img" src={img2} alt="" />
                <div className="overlay"></div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="gallery">
                <img className="img" src={img3} alt="" />
                <div className="overlay"></div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="gallery">
                <img className="img" src={img4} alt="" />
                <div className="overlay"></div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="gallery">
                <img className="img" src={img5} alt="" />
                <div className="overlay"></div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="gallery">
                <img className="img" src={img6} alt="" />
                <div className="overlay"></div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="gallery">
                <img className="img" src={img7} alt="" />
                <div className="overlay"></div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="gallery">
                <img className="img" src={img8} alt="" />
                <div className="overlay"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FoodGellary;
