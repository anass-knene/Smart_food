import React, { useEffect, useState } from "react";
import { MyContext } from "./context";
import { useNavigate } from "react-router-dom";

function Container({ children }) {
  const [user, setUser] = useState({});
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [showNavWhy, setShowNavWhy] = useState(false);
  const [showNavRes, setShowNavRes] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        query: `query{
          getVerify{ 
          user{
          id 
          firstName
          lastName 
          email
     
    }
  }
}`,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.data.getVerify) {
          // console.log(result);
          setUser(result.data.getVerify.user);
          setIsUserLogin(true);
          console.log(isUserLogin);
        } else {
          navigate("/");
        }
      });
  }, []);
  return (
    <MyContext.Provider
      value={{
        user,
        setUser,
        isUserLogin,
        setIsUserLogin,
        showNavWhy,
        setShowNavWhy,
        showNavRes,
        setShowNavRes,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default Container;
