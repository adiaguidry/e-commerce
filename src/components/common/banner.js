import React from "react";
import { A } from "hookrouter";

const Banner = () => {
  return (
    <div className="row">
      <div className="banner-text">
        <div>
          <h1>Wall Paper Designs</h1>
          <h4>
            Countless designs for all your rooms and all your personalities.
          </h4>
        </div>
        <div>
          <h2>SALE We've got you covered!</h2>
          <button>
            <A href="/shop">shop now &#8594;</A>
          </button>
          <h4>Many of your favorite patterns on 50% off.</h4>
        </div>
      </div>
    </div>
  );
};

export default Banner;
