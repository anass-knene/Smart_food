import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import FirstNav from "./components/firstNav/FirstNav";

import Footer from "./components/Footer";
import Home from "./components/Home";
import SecondNav from "./components/secondNav/SecondNav";
import Container from "./context/Container";
import "animate.css";

import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "./components/Shop";

import { MyContext } from "./context/context";
import System from "./components/why-smartWhip/System";
import HowItWork from "./components/why-smartWhip/HowItWork";
import About from "./components/resources/About";
import Faq from "./components/resources/Faq";
import Contact from "./components/Contact";
import Wholesale from "./components/Wholesale";
import Basket from "./components/firstNav/Basket";
import Profile from "./components/firstNav/Profile";
import Login from "./components/firstNav/register/Login";

function App() {
  const { isUserLogin } = useContext(MyContext);

  return (
    <div className="App">
      <FirstNav />
      <SecondNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={isUserLogin ? <Profile /> : <Login />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/discover" element={<System />} />
        <Route path="/how-work" element={<HowItWork />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/wholesale" element={<Wholesale />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
