import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { MyContext } from "../../context/context";
function FirstNav() {
  const { setIsUserLogin, setUser, isUserLogin } = useContext(MyContext);
  function logoutUser() {
    localStorage.removeItem("token");
    setIsUserLogin(false);
    setUser({});
  }
  return (
    <div className=" FirstNavContainer">
      <ul className="FirstNavUl">
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
    </div>
  );
}

export default FirstNav;
