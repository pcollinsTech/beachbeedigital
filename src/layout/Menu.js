import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Menu = (props) => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li className="menu_item">
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li className="menu_item">
          <Link onClick={props.onToggleMenu} to="/about">
            About
          </Link>
        </li>
        {/* <li>
					<Link onClick={props.onToggleMenu} to="/blog">
						Blog
					</Link>
				</li>
				<li>
					<Link onClick={props.onToggleMenu} to="/clients">
						Clients
					</Link>
				</li> */}
      </ul>
      <ul className="actions vertical">
        <li>
          <Link to="/contact" className="button special fit">
            Get in Touch
          </Link>
        </li>
      </ul>
    </div>
    <span
      className="close"
      onClick={props.onToggleMenu}
      onKeyDown={props.onToggleMenu}
    >
      Close
    </span>
  </nav>
);

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Menu;
