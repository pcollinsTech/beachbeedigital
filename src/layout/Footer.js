import React from "react";
import moment from "moment";
const Footer = (props) => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https" className="icon alt fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/BeachBeeDigital"
            className="icon alt fa-facebook"
            target="__blank"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/beach_bee_digital/"
            className="icon alt fa-instagram"
            target="__blank"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        {/* <li>
          <a href="#" className="icon alt fa-github">
            <span className="label">GitHub</span>
          </a>
		</li> */}
        <li>
          <a
            href="https://www.linkedin.com/company/beach-bee-digital"
            className="icon alt fa-linkedin"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Beach Bee Digital {moment().format("YYYY")}</li>
      </ul>
    </div>
  </footer>
);

export default Footer;
