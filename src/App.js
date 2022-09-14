import React from "react";
import Menu from "./Menu";
import HomePage from "./HomePage";
import "./App.css";
import Logo from "./images/logo.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <div className="header">
          <img key={Logo} src={Logo} alt={""} className={"logo"} />
          <h1>Pizzeria Marinara</h1>
        </div>
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <footer className="font-two spacing row center-items">
          {" "}
          &copy; 2022 Pizzeria Marinara All Rights Reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
