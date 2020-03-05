import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h2 className="logo">
          <i className="fas fa-chess-board"></i> Wise Designs
        </h2>
        <span>Spruce up your space with Wise Designs</span> <br />
        <span>
          Change your mind, change your deisgn.
          <br /> Its simple.
        </span>
        <br />
        <span>
          <i className="fab fa-pinterest-square"></i>
          <i className="fab fa-instagram-square"></i>
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-twitter-square"></i>
        </span>
      </div>
      <div>
        <h3>My Account</h3>
        <ul>
          <li>Sign in</li>
          <li>View Cart</li>
          <li>My Wishlist</li>
        </ul>
      </div>
      <div>
        <h3>Useful Links</h3>
        <ul>
          <li>About Wise Designs</li>
          <li>FAQ</li>
          <li>Contact us</li>
          <li>Log in</li>
        </ul>
      </div>
      <div>
        <h3>Customer Service</h3>
        <ul>
          <li>Shipping</li>
          <li>Returns</li>
          <li>Terms and conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
