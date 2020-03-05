import React, { useState, useEffect } from "react";
import { A } from "hookrouter";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [pageUp, setPageUp] = useState(false);

  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    function onScroll() {
      setScrollPos(window.pageYOffset);
      if (scrollPos >= 550) {
        setPageUp(true);
      } else {
        setPageUp(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <div>
      <nav>
        <div className="number">Call +456-678-9101</div>
        <div>
          <ul>
            <li>
              <i
                className="fa fa-shopping-cart cart-icon"
                aria-hidden="true"
              ></i>
              <A href="/cart">Cart</A>
            </li>
            <li>
              <a href="#">Sign In</a>
            </li>
          </ul>
        </div>
        {pageUp && (
          <div
            onClick={() => {
              console.log("clicked");
              setScrollPos(0);
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              });
            }}
            className="to-top"
          >
            &#8593;
          </div>
        )}
      </nav>
      <div className="menubar">
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {!toggle ? (
            <i className="fa fa-bars fa-lrg"></i>
          ) : (
            <i className="fas fa-times fa-lrg"></i>
          )}
        </button>
      </div>

      <div className="subnav">
        <div>
          <h2 className="logo">
            <A href="/">
              <i className="fas fa-chess-board"></i> Wise Designs
            </A>
          </h2>
        </div>

        <div>
          <ul className={toggle ? "show" : "hide"}>
            <li>
              <A href="/shop">Shop</A>
            </li>
            <li>
              <A href="/about">About</A>
            </li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
