import React from "react";
import "./Banner.css";
import { Container } from "react-bootstrap";
import banner from "../../assets/banner.jpg"

const Banner = () => {
  return (
    <div className="banner-part">
      <img src={banner} alt="" />
      <div className="banner-overlay">
        <Container>
          <div className="banner-text">
            <h1>Welcome To Our</h1>
            <h3>Foodies and Goodies Restaurant</h3>
            <p>
              Its our delicious food restaurant. We always try to provide our
              best. <br /> In our
              restaurant food  are cooks by experienced cook. Welcome to
              our restaurant.
            </p>

            <a className="btn-ex" href="">Explore More</a>

           
          </div>

          
        </Container>
      </div>
    </div>
  );
};

export default Banner;
