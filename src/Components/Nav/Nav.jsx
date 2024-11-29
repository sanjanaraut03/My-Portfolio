import React, { useRef, useState } from 'react'; // Import useState and useRef
import './Nav.css';
import { Link } from 'react-scroll';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility
  const menu = useRef(); // Ref for hamburger menu
  const mobileMenuRef = useRef(); // Ref for mobile menu
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    menu.current.classList.toggle("activeham"); // Toggle the 'activeham' class on the hamburger button
    mobileMenuRef.current.classList.toggle("activemobile"); // Toggle the 'activemobile' class on the mobile menu
  };

  useGSAP(()=>{
    let tl=gsap.timeline()
    tl.from("nav h1",{
      y:-100,
      duration:0.7,
      opacity:0
    })
    tl.from("nav ul li ",{
      y:-100,
      duration:0.7,
      opacity:0,
      stagger:1

    })
  })
  return (
    <nav>
      <h1><b>PORTFOLIO</b></h1>
      {/* Desktop Menu */}
      <ul className='desktop-menu'>
        <li>
          <Link to="home" activeClass="active" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" activeClass="active" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" activeClass="active" spy={true} smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500}>
            Contacts
          </Link>
        </li>
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" ref={menu} onClick={toggleMenu}>
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`mobile-menu ${isMenuOpen ? 'activemobile' : ''}`}
        ref={mobileMenuRef}
      >
        <li>
          <Link to="home" activeClass="active" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" activeClass="active" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" activeClass="active" spy={true} smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500}>
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
