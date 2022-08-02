import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { AiOutlineInstagram } from "react-icons/ai";
import { Modal } from "react-bootstrap";
import { MyContext } from "../../context/context";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import FirstNav from "../firstNav/FirstNav";
function MobilNav(props) {
  //   const { showNavRes, setShowNavRes, showNavWhy, setShowNavWhy } =
  //     useContext(MyContext);
  //   const { isAdminLogin, setIsAdminLogin, setAdmin } = useContext(MyContext);
  //   function adminSignOut() {
  //     localStorage.removeItem("admin");
  //     setIsAdminLogin(false);
  //     setAdmin({});
  //   }
  const [showNavWhyMobile, setShowNavWhyMobile] = useState(false);
  const [showNavResMobile, setShowNavResMobile] = useState(false);

  function closeNavModalMobile() {
    props.onHide();
  }
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      fullscreen={true}
      centered
      className="ModalNav"
    >
      <div
        className={props.show ? "  ContainerMobileOpen" : "ContainerMobile "}
      >
        <div className="MenuBtn_Container ">
          <Link to="/" className="headerMobile" onClick={closeNavModalMobile}>
            <h1>Smartwhip</h1>
          </Link>
          {/* here we have to add the login navbar */}
          <div
            className={props.show ? "Menu-Btn Open " : "Menu-Btn"}
            onClick={() => props.onHide()}
          >
            <div className="Menu-Btn__Burger "></div>
          </div>
        </div>
      </div>

      <ul className="Nav-LinksMobile ">
        <div className="Nav-LinksMobileDiv">
          {/* {isAdminLogin && (
            <input
              type="button"
              value="Sign out"
        //       onClick={adminSignOut}
              className="SignOutBtnMobile"
            />
          )} */}

          <NavLink
            to="/shop"
            activeclassname="active"
            onClick={closeNavModalMobile}
          >
            Shop
          </NavLink>
          <li
            onClick={() => {
              setShowNavResMobile(false);
              setShowNavWhyMobile(!showNavWhyMobile);
            }}
            className="subNavMobile"
          >
            Why Smartwhip ?
            {showNavWhyMobile ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            {showNavWhyMobile && (
              <div
                id="subNavWhyMobile"
                className="animate__animated animate__zoomIn"
              >
                <ul>
                  <li>
                    <Link onClick={closeNavModalMobile} to="/discover">
                      Discover the Smartwhip system
                    </Link>
                  </li>

                  <li>
                    <Link onClick={closeNavModalMobile} to="/how-work">
                      How it Work
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li
            onClick={() => {
              setShowNavWhyMobile(false);
              setShowNavResMobile(!showNavResMobile);
            }}
            className="subNavMobile"
          >
            Resources
            {showNavResMobile ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            {showNavResMobile && (
              <div
                id="subNavResMobile"
                className="animate__animated animate__zoomIn"
              >
                <ul>
                  <li>
                    <Link onClick={closeNavModalMobile} to="/about">
                      About
                    </Link>
                  </li>

                  <li>
                    <Link onClick={closeNavModalMobile} to="/faq">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <NavLink
            to="/wholesale"
            activeclassname="active"
            onClick={closeNavModalMobile}
          >
            wholesale
          </NavLink>
          <NavLink
            to="/contact"
            activeclassname="active"
            onClick={closeNavModalMobile}
          >
            Contact
          </NavLink>
        </div>
        <div className="socialIconDiv">
          <a href="#/">
            <AiOutlineInstagram size={50} />
          </a>
        </div>
      </ul>
    </Modal>
  );
}

export default MobilNav;
