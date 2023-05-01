import React from "react";
import banner from "../../assets/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-part">
      <img className="img" src={banner} alt="" />

      <div className="banner-item"></div>

    </div>
  );
};

export default Banner;
