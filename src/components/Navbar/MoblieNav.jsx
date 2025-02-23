import React from "react";
import "./MoblieNav.css";
import { Link } from "react-router-dom";

const MoblieNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`moblie-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="moblie-menu-container">
          <nav>
            <ul>
              <li>
                <Link to="/" className="menu-item1">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/skills" className="menu-item1">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/work-experience" className="menu-item1">
                  Work Experience
                </Link>
              </li>
              <li>
                <Link to="/contact-me" className="menu-item1">
                  Contact Me
                </Link>
              </li>
              <button className="contact-btn" onClick={() => {}}>
                Hire Me
              </button>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
export default MoblieNav;
