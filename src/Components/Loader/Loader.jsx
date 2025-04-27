import React from "react";
import "./loader.css";
import loaderImage from "../../images/logo svg.svg"; // Adjust the path as necessary

const Loader = () => {
  return (
    <div className="loader">
      <div className="svg-wrapper">
       <img src={loaderImage} alt="Loading..." className="loader-img" />
      
       
      </div>
    </div>
  );
};

export default Loader;
