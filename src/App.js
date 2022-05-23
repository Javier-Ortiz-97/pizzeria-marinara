import React from "react";
import Menu from "./Menu";
import "./App.css"; 
import Logo from "./images/logo.png";
function App() {
  return (
    <div className="body">
      <div className="header">
      <img key={Logo} src={Logo} alt={""} className={"logo"} />
        <h1>Pizzeria Marinara</h1>
      </div>

      <Menu />
      <footer className="font-two spacing">
        {" "}
        &copy; 2022 Pizzeria Marinara All Rights Reserved, Website by Javier
      </footer>
    </div>
  );
}

export default App;
