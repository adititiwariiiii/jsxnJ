import React, { useState } from "react";
import "./Navbar.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (

    <div className="Navbar">
      <span className="nav-logo">Rent-A-Property</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/Rent">Rent</a>
        <a href="/Buy">Buy</a>
        <a href="/Sell">Sell</a>
        <a href="/ManageProperty">ManageProperty</a>
        <a href="/Resources">Resources</a>
      

      </div>
      <button class="button button1">Login</button>
      <button class="button button2">SignUp</button>

      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>

    </div>
    
  );
};

export default Navbar;