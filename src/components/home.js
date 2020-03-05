import React from "react";
import Banner from "./common/banner";
import Section from "./common/section";
import Coupon from "./common/coupon";
import Icons from "./common/icons";
import ImageBanner from "./common/imgbanner";
import Gallery from "./common/gallery";

function Home() {
  return (
    <div className="App">
      <div className="wrapper">
        <Banner />
        <Section />
        <Coupon />
        <Icons />
        <ImageBanner />
        <Gallery />
      </div>
    </div>
  );
}

export default Home;
