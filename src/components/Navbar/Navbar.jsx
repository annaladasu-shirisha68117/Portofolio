import {useState} from "react";
import './Navbar.css'
import { IoMenuOutline } from "react-icons/io5";  
import MoblieNav from "./MoblieNav";
import { AiOutlineClose } from "react-icons/ai";
import Skills from "../Skills/Skills";
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Navbar = () =>{
    const [openMenu, setOpenMenu] = useState(false);
    const [isOpen, setIsOpen] =useState(false);

    const toggleMenu = () =>{
        setOpenMenu(!openMenu);
        setIsOpen(true)
    }

   const Skills = lazy(() => import('././../Skills/Skills'));
    
    return (
       <>
       <MoblieNav isOpen={isOpen} toggleMenu={toggleMenu}/>
       <nav className="nav-wrapper">
        <div className="nav-content">
            <ul>
                <li>
                    <a className="menu-item">Home</a>
                </li>
                <li>
                    <a className="menu-item" onChange={Skills}>Skills</a>
                </li>
                <li>
                    <a className="menu-item">Work Experience</a>
                </li>
                <li>
                    <a className="menu-item">Contact Me</a>
                </li>
                <button className="contact-btn" onClick={() => {}}>
                    Hire Me
                </button>
            </ul>
            <button className="menu-btn" onClick={toggleMenu}>
            {!openMenu ? <IoMenuOutline />
            : <AiOutlineClose />}
            </button>
        </div>

       </nav>
       </>
    )
}
export default Navbar;
