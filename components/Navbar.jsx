import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Fade as Hamburger } from 'hamburger-react';
import Logow from "../src/assets/images/logow.png";
import Logob from "../src/assets/images/logob.png";

const NavbarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  
  // Handle screen resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Change navbar background on scroll
      const isScrolledNow = window.scrollY > 50;
      setIsScrolled(isScrolledNow);
      
      // Detect active section based on scroll position
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Default to home when at the very top
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }
      
      // Default to contact when at the very bottom
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        setActiveSection("contact");
        return;
      }
      
      // Otherwise check each section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = rect.top + window.scrollY;
          const offsetBottom = offsetTop + rect.height;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    // Initial call to set correct section on load
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Update navbar appearance based on scroll position
  useEffect(() => {
    if (navbarRef.current && logoRef.current) {
      if (isScrolled) {
        navbarRef.current.classList.add("scrolled");
        logoRef.current.style.backgroundImage = `url(${Logob})`;
      } else {
        navbarRef.current.classList.remove("scrolled");
        logoRef.current.style.backgroundImage = `url(${Logow})`;
      }
    }
  }, [isScrolled]);
  
  // Handle mobile menu toggle
  const toggleNavbar = () => {
    setExpanded(!expanded);
  };
  
  // Close mobile menu when a link is clicked
  const closeNavbar = () => {
    setExpanded(false);
  };
  
  // Improved smooth scroll to section
  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    
    const section = document.getElementById(sectionId);
    if (section) {
      // Get the section's position
      const sectionPosition = section.getBoundingClientRect().top;
      // Get the current scroll position
      const offsetPosition = sectionPosition + window.scrollY - 80;
      
      // Perform the smooth scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Close mobile menu and update active section
      closeNavbar();
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      {isMobile && (
        <div className={`mobile-menu-toggle ${expanded ? 'active' : ''}`}>
          <Hamburger
            size={24}
            toggled={expanded}
            toggle={toggleNavbar}
            color={isScrolled || expanded ? "#333" : "#fff"}
          />
        </div>
      )}
      
      <Navbar
        ref={navbarRef}
        expanded={expanded}
        expand="lg"
        fixed="top"
        className={`modern-navbar ${isScrolled ? 'scrolled' : ''}`}
      >
        <Container>
          <Navbar.Brand href="#home" onClick={(e) => scrollToSection("home", e)}>
            <div
              ref={logoRef}
              className="navbar-logo"
              style={{ backgroundImage: `url(${isScrolled ? Logob : Logow})` }}
            ></div>
          </Navbar.Brand>
          
          <Navbar.Toggle
            aria-controls="navbar-nav"
            onClick={toggleNavbar}
            className="d-none"
          />
          
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto nav-links">
              <Nav.Link
                href="#home"
                onClick={(e) => scrollToSection("home", e)}
                className={activeSection === "home" ? "active" : ""}
              >
                <span>Home</span>
              </Nav.Link>
              
              <Nav.Link
                href="#about"
                onClick={(e) => scrollToSection("about", e)}
                className={activeSection === "about" ? "active" : ""}
              >
                <span>About</span>
              </Nav.Link>
              
              <Nav.Link
                href="#projects"
                onClick={(e) => scrollToSection("projects", e)}
                className={activeSection === "projects" ? "active" : ""}
              >
                <span>Projects</span>
              </Nav.Link>
              
              <Nav.Link
                href="#contact"
                onClick={(e) => scrollToSection("contact", e)}
                className={activeSection === "contact" ? "active" : ""}
              >
                <span>Contact</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      {/* Mobile Navigation Overlay */}
      <div className={`mobile-menu ${expanded ? 'show' : ''}`}>
        <Nav className="mobile-nav-links">
          <Nav.Link
            href="#home"
            onClick={(e) => scrollToSection("home", e)}
            className={activeSection === "home" ? "active" : ""}
          >
            Home
          </Nav.Link>
          
          <Nav.Link
            href="#about"
            onClick={(e) => scrollToSection("about", e)}
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </Nav.Link>
          
          <Nav.Link
            href="#projects"
            onClick={(e) => scrollToSection("projects", e)}
            className={activeSection === "projects" ? "active" : ""}
          >
            Projects
          </Nav.Link>
          
          <Nav.Link
            href="#contact"
            onClick={(e) => scrollToSection("contact", e)}
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default NavbarComponent;