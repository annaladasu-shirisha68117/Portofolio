import React from "react";
import "./MoblieNav.css";

const MoblieNav = ({ isOpen , toggleMenu }) => {
    return (
        <>
        <div className={`moblie-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}>
            <div className="moblie-menu-container">
                <ul>
                    <li>
                        <a className="menu-item1">Home </a>
                    </li>
                    <li>
                    <a className="menu-item1">Skills</a>
                </li>
                <li>
                    <a className="menu-item1">Work Experience</a>
                </li>
                <li>
                    <a className="menu-item1">Contact Me</a>
                </li>
                <button className="contact-btn" onClick={() => {}}>
                    Hire Me
                </button>
                </ul>
            </div>

        </div>
        </>
    )
}
export default MoblieNav;