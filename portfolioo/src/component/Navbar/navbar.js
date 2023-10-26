import React, { useState } from "react";
import './navbar.css';
import logo from '../../asset/logo.jpg';
import contactImg from '../../asset/contactImg.png'; // Fix the import path
import { Link } from 'react-scroll';
import Menu from '../../asset/menu.png'

const Navbar = () => {
    const[showMenu, setShowMenu] = useState(false)
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About Me</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass="active" to="services" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Services</Link>
            </div>
            <button className="desktopMenuBtn"onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
            <img src={contactImg} alt='' className="desktopMenuImg" />
                Contact Me
            </button>
            <img src={Menu} alt="menu" className="mobMenu"onClick={()=>setShowMenu(!showMenu)} />
            <div className="navMenu" style={{display:showMenu? 'flex':'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="ListItem"onClick={()=>setShowMenu(!showMenu)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="ListItem"onClick={()=>setShowMenu(!showMenu)}>About Me</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="ListItem"onClick={()=>setShowMenu(!showMenu)}>Portfolio</Link>
                <Link activeClass="active" to="services" spy={true} smooth={true} offset={-50} duration={500} className="ListItem"onClick={()=>setShowMenu(!showMenu)}>Services</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="ListItem"onClick={()=>setShowMenu(!showMenu)}>Contact</Link>
            </div>

        </nav>
    )
}

export default Navbar;