import { useEffect } from 'react';
import NavbarComponent from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  // Initialize animations and intersection observers
  useEffect(() => {
    // Back to top button
    const showBackToTopButton = () => {
      const backToTopButton = document.getElementById('back-to-top');
      if (backToTopButton) {
        if (window.scrollY > 300) {
          backToTopButton.classList.add('visible');
        } else {
          backToTopButton.classList.remove('visible');
        }
      }
    };
    
    window.addEventListener('scroll', showBackToTopButton);
    
    // Initialize custom cursor
    const initCustomCursor = () => {
      const cursor = document.querySelector('.cursor');
      const cursorFollower = document.querySelector('.cursor-follower');
      
      if (!cursor || !cursorFollower) {
        console.error('Cursor elements not found');
        return;
      }
      
      // Set initial opacity
      cursor.style.opacity = 0;
      cursorFollower.style.opacity = 0;
      
      // Check if we're on mobile
      const isMobile = window.innerWidth <= 768;
      if (isMobile) return;
      
      // Make visible after a delay
      setTimeout(() => {
        cursor.style.opacity = 1;
        cursorFollower.style.opacity = 1;
      }, 1000);
      
      // Update on mouse move
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        setTimeout(() => {
          cursorFollower.style.left = `${e.clientX}px`;
          cursorFollower.style.top = `${e.clientY}px`;
        }, 70);
      });
      
      // Interactive element effects
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .project-card');
      
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
          cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
          cursorFollower.style.borderColor = 'rgba(74, 140, 255, 0.8)';
        });
        
        element.addEventListener('mouseleave', () => {
          cursor.style.transform = 'translate(-50%, -50%) scale(1)';
          cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
          cursorFollower.style.borderColor = 'rgba(74, 140, 255, 0.5)';
        });
      });
      
      // Click effects
      document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.7)';
      });
      
      document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
      });
    };
    
    // Initialize cursor
    initCustomCursor();
    
    // Cleanup event listeners
    return () => {
      window.removeEventListener('scroll', showBackToTopButton);
    };
  }, []);
  
  // Handle back to top button click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="app">
      <NavbarComponent />
      <Hero />
      <About />
      <Projects />
      <Footer />
      
      {/* Back to Top Button */}
      <button id="back-to-top" className="back-to-top" onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i>
      </button>
      
      {/* Cursor Animation - Make sure these elements exist in your DOM */}
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
    </div>
  );
}

export default App;