import React from "react";
import { Route, Routes } from "react-router-dom";
import FirstNav from "./components/FirstNav";
import Login from "./components/register/Login";
import Signup from "./components/register/Signup";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SecondNav from "./components/SecondNav";
import Container from "./context/Container";
import "./styles/App.scss";
import Basket from "./components/Basket";
function App() {
  return (
    <Container>
      <div className="App">
        <FirstNav />
        <SecondNav />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Container>
  );
}

export default App;
