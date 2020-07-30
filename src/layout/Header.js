import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import logo from "../assets/images/logo.png";
import comb from "../assets/images/test1.png";

const Header = (props) => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <img src={logo} alt="" />
    </Link>
    <nav>
      <img
        alt="hi"
        src={comb}
        width="130px"
        height="135px"
        className="menu-link"
        onClick={props.onToggleMenu}
        onKeyDown={props.onToggleMenu}
      />
    </nav>
  </header>
);

Header.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Header;
