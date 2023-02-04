import React, { useState } from "react";
import { GiHamburgerMenu as Hamburger } from "react-icons/gi";
import logo from "../../assets/react.svg";
import "./NavBar.css";

const Navr = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  // const [checked, setChecked] = useState(true);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const Logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  // const handleChange = (val: boolean) => {
  // 	setChecked(val);
  // };
  return (
    <div className="demo_container">
      <div className="demo_logo">
        <span>
          Logo
        </span>
      </div>
      <div className="demo_menu-icon" onClick={handleShowNavbar}>
        <Hamburger style={{ fontSize: "40px" }} />
      </div>
      <div className={`nav-elements  ${showNavbar && "active"}`}>
        <ul>
          <li>
            My order
          </li>
          <li>
            Payment
          </li>
          <li onClick={Logout}>
            Logout
          </li>

          <li className="li_moblile_s li_mobile_l_u">
            <img src={logo} alt="notification" />
          </li>
          <li>
           home
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navr;