import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
          <NavLink to="/">Smartwhip</NavLink>
        </li>
        <li>
          <NavLink activclassname="active" to="/shop">
            Shop
          </NavLink>
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
          {showNavWhy ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          {showNavWhy && (
            <div id="subNavWhy">
              <ul className=" animate__animated animate__fadeIn ">
                <Link to="/discover">Discover the Smartwhip system</Link>

                <Link to="/how-work">How it Work</Link>
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
          {showNavRes ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          {showNavRes && (
            <div id="subNavRes">
              <ul className="animate__animated animate__fadeIn">
                <Link to="/about">About</Link>

                <Link to="/faq">FAQ</Link>
              </ul>
            </div>
          )}
        </li>

        <li>
          <NavLink activclassname="active" to="/wholesale">
            wholesale
          </NavLink>
        </li>

        <li>
          <NavLink activclassname="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SecondNav;
