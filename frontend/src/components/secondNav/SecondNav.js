import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import MobilNav from "../mobileNav/MobileNav";
import { MyContext } from "../../context/context";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

function SecondNav() {
  const {
    showNavRes,
    setShowNavRes,
    showNavWhy,
    setShowNavWhy,
    setIsUserLogin,
    setUser,
    isUserLogin,
  } = useContext(MyContext);
  const [modalShow, setModalShow] = useState(false);
  const whyRef = useRef();
  const resRef = useRef();

  function logoutUser() {
    localStorage.removeItem("token");
    setIsUserLogin(false);
    setUser({});
  }
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
    <>
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
      <div className="ContainerMobile">
        <div className="MenuBtn_Container">
          <Link to="/" className="headerLinkMobile">
            <h1>Smartwhip</h1>
          </Link>

          <ul className="FirstNavUlMobile">
            <li>
              {isUserLogin ? (
                <Link onClick={logoutUser} to="/">
                  Log Out
                </Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
            <li>
              <Link to="/profile">
                <FaRegUser />
              </Link>
            </li>
            <li>
              <Link to="/basket">
                <FiShoppingCart />
              </Link>
            </li>
          </ul>

          <div
            className={modalShow ? "Menu-Btn Open" : "Menu-Btn"}
            onClick={() => setModalShow(true)}
          >
            <div className="Menu-Btn__Burger"></div>
          </div>
          <MobilNav show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </>
  );
}

export default SecondNav;
