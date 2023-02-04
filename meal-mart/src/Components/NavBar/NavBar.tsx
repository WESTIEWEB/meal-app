import "./Nav.css"
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="nav-menu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <i className={`fa fa-bars ${isOpen ? "open" : ""}`} aria-hidden="true"></i>
      </div>
    </nav>
  );
}

export default Navbar;