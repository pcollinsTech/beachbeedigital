import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import logo from "../assets/images/logo.png";
import comb from "../assets/images/123.png";

const Header = (props) => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <img src={logo} alt="" />
    </Link>
    <nav>
      <img src={comb} width="130px" height="85px" alt="123" className="menu-link" onClick={props.onToggleMenu} />
    </nav>
  </header>
);

Header.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Header;
