import React from "react";
import "./TechTicker.css";

const TechTicker = ({ logos = [] }) => {
  return (
    <div className="logo-ticker-container">
      <div className="logo-ticker-content">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="logo-ticker-img"
          />
        ))}
      </div>
    </div>
  );
};

export default TechTicker;
