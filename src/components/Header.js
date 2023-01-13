import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "../styles/header.css";
import LOGO from "../../src/assets/imgs/logo.svg";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(true);

  return (
    <header>
      <Link to="/">
        <img src={LOGO} />
      </Link>
      <div className="hamburger">
        <GiHamburgerMenu />
      </div>
      <nav>
        {/* <Link to="/">About Me</Link> */}
        {/* <Link to="#features">Features</Link>
        <Link to="/projects">Projects</Link>
        <Link to="#">Pricing</Link> */}
      </nav>
      {/* <div className="header-actions">
        <Link to="#">Login</Link>
        <Link to="#">Signup</Link>
      </div> */}
      <div
        className={`mobile-drop-down ${
          showDropDown ? "active-drop-down" : "closed-drop-down"
        }`}
      >
        <nav>
          {/* <Link to="#">About Me</Link> */}
          {/* <Link to="#">Features</Link>
          <Link to="/projects">Projects</Link>
          <Link to="#">Pricing</Link> */}
        </nav>
        {/* <div className="header-actions">
          <Link to="#">Login</Link>
          <Link to="#">Signup</Link>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
