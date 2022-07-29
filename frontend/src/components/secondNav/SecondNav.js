import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

function SecondNav() {
  const [showNavWhy, setShowNavWhy] = useState(false);
  const [showNavRes, setShowNavRes] = useState(false);
  const whyRef = useRef();
  const resRef = useRef();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (
        e.path[0] !== whyRef.current &&
        e.path[0] !== whyRef.current.children[0]
      ) {
        setShowNavWhy(false);
      }
      if (
        e.path[0] !== resRef.current &&
        e.path[0] !== resRef.current.children[0]
      ) {
        setShowNavRes(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => {
      document.body.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div className="secondNavContainer">
      <ul className="SecondNavUl">
        <li>
          <Link to="/">Smartwhip</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li
          ref={whyRef}
          onClick={() => {
            setShowNavRes(false);
            setShowNavWhy(!showNavWhy);
          }}
          className="subNav"
        >
          Why Smartwhip ?
          <IoMdArrowDropdown />
          {showNavWhy && (
            <div id="subNavWhy">
              <ul>
                <li>
                  <Link to="/discover">Discover the Smartwhip system</Link>
                </li>

                <li>
                  <Link to="/how-work">How it Work</Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          onClick={() => {
            setShowNavWhy(false);
            setShowNavRes(!showNavRes);
          }}
          ref={resRef}
          className="subNav"
        >
          Resources
          <IoMdArrowDropdown />
          {showNavRes && (
            <div id="subNavRes">
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li>
          <Link to="/wholesale">wholesale</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default SecondNav;