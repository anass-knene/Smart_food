import React from "react";
import { useMutation } from "@apollo/client";
import { FaInstagram, FaLock, FaTwitter, FaUser } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { CREATE_USER } from "../../../graphql/mutations";
import Swal from "sweetalert2";
function Signup() {
  const navigate = useNavigate();
  const [addUser, { data, loading, error }] = useMutation(CREATE_USER);
  const signupForm = (e) => {
    e.preventDefault();
    addUser({
      variables: {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value,
        password: e.target.password.value,
      },
    }).then((res) => {
      if (res) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Account Created",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/login");
      }
    });
  };
  if (loading) return <h1>...loading</h1>;
  if (error)
    return Swal.fire({
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
          <form className="SignUp" onSubmit={signupForm}>
            <div className="SignUp__field">
              <FaUser className="SignUp__icon fas fa-user" />
              <input
                type="text"
                className="SignUp__input"
                placeholder="First Name"
                name="firstName"
                required
              />
              <div className="SignUp__field">
                <FaUser className="SignUp__icon fas fa-user" />
                <input
                  type="text"
                  className="SignUp__input"
                  placeholder="Last Name"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="SignUp__field">
              <MdEmail className="SignUp__icon fas fa-user" />
              <input
                type="email"
                className="SignUp__input"
                placeholder="Email"
                name="email"
                required
              />
            </div>
            <div className="SignUp__field">
              <FaLock className="SignUp__icon fas fa-lock" />
              <input
                type="password"
                className="SignUp__input"
                placeholder="Password"
                name="password"
                required
              />
            </div>

            <button type="submit" className="Button SignUp__submit">
              <span className="Button__text">Create New Account </span>
              <BsChevronRight className="Button__icon fas fa-chevron-right" />
            </button>
            <Link to="/login" className="Button Login__submit">
              <span className="Button__text">Log In Now</span>
              <BsChevronRight className="Button__icon fas fa-chevron-right" />
            </Link>
          </form>
          <div className="Social-Login">
            <h3>Signup via</h3>
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

export default Signup;
