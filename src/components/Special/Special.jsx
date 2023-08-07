import React from "react";
import "./Special.css";
import { Col, Row } from "react-bootstrap";
import specialImg1 from "../../assets/special1.jpg";
import specialImg2 from "../../assets/special2.jpg";
import specialImg3 from "../../assets/special3.jpg";
import specialImg4 from "../../assets/special4.jpg";

const Special = () => {
  return (
    <div id="special-part">
      <div className="container">
        <div className="special-text">
          <h1>Today's Special</h1>
          <p>Fresh and Delecious</p>
        </div>

        <div className="special-item">
          <Row>
            <Col lg={3}>
              <div className="special-part">
                <img src={specialImg1} alt="" />
                <div className="overlay"></div>
                
              </div>
              <p className="special-semitext">$69</p>
              <p className="special-semitext">Roasted Chicken</p>
            </Col>

            <Col lg={3}>
              <div className="special-part">
                <img src={specialImg2} alt="" />
                <div className="overlay"></div>
                
              </div>
              <p className="special-semitext">$89</p>
              <p className="special-semitext">Baked Crab Cheese</p>
            </Col>

            <Col lg={3}>
              <div className="special-part">
                <img src={specialImg3} alt="" />
                <div className="overlay"></div>
                
              </div>
              <p className="special-semitext">$70</p>
              <p className="special-semitext">Foie Gras</p>
            </Col>

            <Col lg={3}>
              <div className="special-part">
                <img src={specialImg4} alt="" />
                <div className="overlay"></div>
                
              </div>
              <p className="special-semitext">$99</p>
              <p className="special-semitext">Chicken Satay</p>
              
            </Col>


          </Row>
        </div>
      </div>
    </div>
  );
};

export default Special;
