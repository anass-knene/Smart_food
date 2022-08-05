import React, { useContext } from "react";
import { FaInstagram, FaLock, FaTwitter } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../../../graphql/mutations";
import { useMutation } from "@apollo/client";
import Swal from "sweetalert2";
import { MyContext } from "../../../context/context";
function Login() {
  const navigate = useNavigate();
  const { setUser, setIsUserLogin } = useContext(MyContext);
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER);
  if (loading) return <h1>...loading</h1>;

  const loginForm = (e) => {
    e.preventDefault();
    loginUser({
      variables: {
        email: e.target.email.value,
        password: e.target.password.value,
      },
    }).then((res) => {
      if (res.data) {
        setUser(res.data.loginUser.user);
        console.log(res.data);
        localStorage.setItem("token", res.data.loginUser.token);
        navigate("/");
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1000,
          customClass: "swal-width",
        });
        setIsUserLogin(true);
      }
    });
  };
  if (error)
    Swal.fire({
      position: "top",
      icon: "error",
      title: error,
      showConfirmButton: false,
      timer: 2000,
      customClass: "swal-width",
    });

  return (
    <div className="ContainerRegister">
      <div className="Screen">
        <div className="Screen__Content">
          <form className="Login" onSubmit={loginForm}>
            <div className="Login__field">
              <MdEmail className="Login__icon fas fa-user" />
              <input
                type="text"
                className="Login__input"
                placeholder="Email"
                name="email"
                required
              />
            </div>
            <div className="Login__field">
              <FaLock className="Login__icon fas fa-lock" />
              <input
                type="password"
                className="Login__input"
                placeholder="Password"
                name="password"
                required
              />
            </div>
            <span>forget password</span>
            <button type="submit" className="Button Login__submit">
              <span className="Button__text">Log In Now</span>
              <BsChevronRight className="Button__icon fas fa-chevron-right" />
            </button>
            <Link to="/signup" className="Button Login__submit">
              <span className="Button__text">Create New Account</span>
              <BsChevronRight className="Button__icon fas fa-chevron-right" />
            </Link>
          </form>
          <div className="Social-Login">
            <h3>log in via</h3>
            <div className="Social-Icons">
              <a href="#/" className="Social-Login__icon fab fa-instagram">
                <FaInstagram />
              </a>
              <a href="#/" className="Social-Login__icon fab fa-facebook">
                <AiFillFacebook />
              </a>
              <a href="#/" className="Social-Login__icon fab fa-twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="Screen__background">
          <span className="Screen__background__shape Screen__background__shape4"></span>
          <span className="Screen__background__shape Screen__background__shape3"></span>
          <span className="Screen__background__shape Screen__background__shape2"></span>
          <span className="Screen__background__shape Screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}

export default Login;
