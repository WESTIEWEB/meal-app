// import "./Nav.css"
// import React, { useState } from "react";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav>
//       <div className="nav-menu">
//         <a href="#">Home</a>
//         <a href="#">About</a>
//         <a href="#">Contact</a>
//       </div>
//       <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
//         <i className={`fa fa-bars ${isOpen ? "open" : ""}`} aria-hidden="true"></i>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import { GiHamburgerMenu as Hamburger } from "react-icons/gi";
import logo from "../../assets/react.svg";
import "./style.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Hidden,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <AppBar position="static">
      <Toolbar id="demo_toolbar">
        <div className="demo_logo">
          <img src={logo} alt="notification" />
          <span>Home</span>
        </div>
        <Hidden smDown>
          <IconButton className="demo_menu-icon" onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Hidden smDown>
          <div className="demo_menu-items">
            <MenuItem onClick={handleClose}>My order</MenuItem>
            <MenuItem onClick={handleClose}>Payment</MenuItem>
            <MenuItem onClick={Logout}>Logout</MenuItem>
          </div>
        </Hidden>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>My order</MenuItem>
          <MenuItem onClick={handleClose}>Payment</MenuItem>
          <MenuItem onClick={Logout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;