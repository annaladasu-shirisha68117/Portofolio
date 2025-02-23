import { useState } from "react";
import "./Navbar.css";
import { IoMenuOutline } from "react-icons/io5";
import MoblieNav from "./MoblieNav";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    setIsOpen(true);
  };

  return (
    <>
      <MoblieNav isOpen={isOpen} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <nav>
            <ul>
              <li>
                <Link to="/" className="menu-item">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/skills" className="menu-item">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/work-experience" className="menu-item">
                  Work Experience
                </Link>
              </li>
              <li>
                <Link to="/contact-me" className="menu-item">
                  Contact Me
                </Link>
              </li>
              <button className="contact-btn" onClick={() => {}}>
                Hire Me
              </button>
            </ul>
          </nav>
          <button className="menu-btn" onClick={toggleMenu}>
            {!openMenu ? <IoMenuOutline /> : <AiOutlineClose />}
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
