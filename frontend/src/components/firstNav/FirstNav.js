import React from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
function FirstNav() {
  return (
    <div className=" FirstNavContainer">
      <ul className="FirstNavUl">
        <li>
          <Link to="/login">Login</Link>
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
    </div>
  );
}

export default FirstNav;
