import React from "react";

const PageBanner = ({ title, text }) => {
  return (
    <div className="banner">
      <div className="banner-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default PageBanner;
