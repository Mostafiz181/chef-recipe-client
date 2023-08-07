import React from "react";
import "./Recent.css";
import { Col, Container, Row } from "react-bootstrap";
import recentImg1 from "../../assets/recent.png";
import recentImg2 from "../../assets/recent1.png";
import recentImg3 from "../../assets/recent2.png";

const Recent = () => {
  return (
    <div id="recent-part">
      <Container>
        <div className="recent-text">
          <h1> Recent Posts</h1>
        </div>

        <div className="recent-item">
          <Row>
            <Col lg={5}>
              <div className="recent-left-img">
                <img src={recentImg1} alt="" />
              </div>
            </Col>

            <Col lg={4}>
              <div className="recent-main">
                <div className="recent-top">
                  <img src={recentImg2} alt="" />
                </div>
                <div className="recent-bottom">
                  <img src={recentImg3} alt="" />
                </div>
              </div>
            </Col>

            <Col lg={3}>
                <h3>Secret Coffee and Desert</h3>
                <p>Indulge in the perfect pairing: rich, aromatic coffee complements delectable desserts. From velvety tiramisu to warm apple pie, these duos offer a delightful symphony of flavors.</p>

            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Recent;
