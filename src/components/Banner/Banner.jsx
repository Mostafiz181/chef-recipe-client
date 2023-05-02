import React from "react";
import "./Banner.css";
import { Container } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="banner-part">
      <img src="../../../public/banner.jpg" alt="" />
      <div className="banner-overlay">
        <Container>
          <div className="banner-text">
            <h1>Welcome To Our</h1>
            <h3>FoodHub Restaurant</h3>
            <p>
              Its our delicious food restaurant. We always try to provide our
              best. <br /> In our
              restaurant food  are cooks by experienced cook. Welcome to
              our restaurant.
            </p>

           
          </div>

          
        </Container>
      </div>
    </div>
  );
};

export default Banner;
