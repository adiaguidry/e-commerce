import React from "react";
import PageBanner from "./common/pageBanner";

const About = () => {
  return (
    <div>
      <PageBanner title={"about"} />
      <div className="about-text">
        <h2>Who we are</h2>
        <h3>
          Wise Design's loves the idea of following your design dreams. Create
          the space of with one pick of a wallpaper. Whether you cover one wall
          or all of them is your choice. If your dreams change, change your
          wall. Dont settle. New baby, new job, new feeling ? Switch it up. We
          can keep up with you and all that you have going on.
        </h3>
      </div>
      <div className="about-banner"></div>
    </div>
  );
};

export default About;
